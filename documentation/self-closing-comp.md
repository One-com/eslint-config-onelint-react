Use self-closing tags for components with no children.

```js
var foo = <Foo></Foo>;
```
```output
Line 4, column 11: Empty components are self-closing
```

```js
var foo = <Foo />;
```
