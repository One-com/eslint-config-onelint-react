Don't allow unknown properties on JSX tags.

```js
var Foo = <div class='foo'>Foo bar</div>;
```
```output
Line 4, column 16: Unknown property 'class' found, use 'className' instead
```
