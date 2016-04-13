Warn about not defined vars used in JSX.

```js
console.log(<Foo />);
```
```output
Line 4, column 14: 'Foo' is not defined.
```

```js
var Foo = require('./Foo');

console.log(<Foo />);
```
