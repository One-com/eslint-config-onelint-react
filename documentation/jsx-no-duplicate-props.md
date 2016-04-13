Don't redefine props:

```js
let Foo = require('./Foo');

var foo = <Foo name='bar' name='foo' />
```
```output
Line 6, column 27: No duplicate props allowed
```
