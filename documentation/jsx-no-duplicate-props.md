Don't redefine props:

```js
var foo = <Foo name='bar' name='foo' />
```
```output
Line 4, column 27: No duplicate props allowed
```
