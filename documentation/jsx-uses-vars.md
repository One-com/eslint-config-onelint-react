Don't let `no-unused-vars` complain about React.

```js
/*eslint no-unused-vars: 2, react/jsx-uses-vars: 0*/
var Foo = require('./Foo');

console.log(<Foo>Foobar</Foo>);
```
```output
Line 5, column 5: 'Foo' is defined but never used
```

```js
/*eslint no-unused-vars: 2 */
var Foo = require('./Foo');

console.log(<Foo>Foobar</Foo>);
```
