var fs = require('fs');
var path = require('path');

var codeBlockContentRegExp = /```(js|javascript|output):?(no-eol)?\n([^`]*)\n```/gm;

function findCodeBlocks (fileContent) {
    var match;
    var blocks = [];
    while ((match = codeBlockContentRegExp.exec(fileContent)) !== null) {
        var lineOffset = (fileContent.substr(0, match.index).match(/\n/g) || []).length;
        var result = {
            type: match[1],
            body: match[3],
            lineOffset: lineOffset + 1
        };

        if (result.type === 'output') {
            blocks[blocks.length - 1].output = result;
        } else {
            if (!match[2]) {
              result.body += '\n';
            }
            blocks.push(result);
        }
    }
    return blocks;
}

function createTestCase (codeBlock, index) {
    var l = [];
    l.push("it('case " + (index + 1) +  "', function () {");

    l.push('return expect(function (cb) {');
    l.push('lintText("' + codeBlock.body.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '", cb)');
    l.push("}, 'to call the callback without error').spread(function (messages) {");

    l.push('messages=messages.map(function (msg) { return "Line " + (msg.line + ' + codeBlock.lineOffset + ') + ", column " + msg.column + ": " + msg.message; })');

    l.push('return expect(messages, "to equal", [');

    if (codeBlock.output) {
        codeBlock.output.body.split('\n').forEach(function (line) {
            l.push('"' + line.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '",');
        });
    }

    l.push(']);');
    l.push('});');
    l.push('});');
    return l;
}

function lintText (text, cb) {
    var eslint = require('eslint');
    var eslintConfig = require('../index.js');
    var result;
    try {
        result = eslint.linter.verify(text, eslintConfig);
    } catch (err) {
        return cb(err);
    }
    return cb(null, result);
}

function md2js (content, fileName) {
    if (fileName) {
        fileName = path.relative(process.cwd(), fileName);
    } else {
        fileName = '<inline code>';
    }

    var codeBlocks = findCodeBlocks(content);

    var codeLines = [];

    codeLines.push("var expect = require('unexpected').clone();");
    codeLines.push(lintText.toString());
    codeLines.push("describe('" + fileName + "', function () {");
    codeLines = codeLines.concat(codeBlocks.map(createTestCase).reduce(function (list, item) {
        return list.concat(item);
    }, []));
    codeLines.push('});');

    return codeLines.join('\n');
}

require.extensions['.md'] = function (module, fileName) {
    module._compile(md2js(fs.readFileSync(fileName, 'utf-8'), fileName), fileName);
};
