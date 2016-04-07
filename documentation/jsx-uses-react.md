Don't let `no-unused-vars` complain about React.

```js:no-react
/*eslint no-unused-vars: 2, react/jsx-uses-react: 0*/
var React = require('react');

console.log(<div>Foobar</div>);
```
```output
Line 5, column 5: 'React' is defined but never used
```

```js:no-react
/*eslint no-unused-vars: 2 */
var React = require('react');

console.log(<div>Foobar</div>);
```
