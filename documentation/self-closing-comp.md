Use self-closing tags for components with no children.

```js
var Foo = require('./Foo');

var foo = <Foo></Foo>;
```
```output
Line 6, column 11: Empty components are self-closing
```

```js
var Foo = require('./Foo');

var foo = <Foo />;
```
