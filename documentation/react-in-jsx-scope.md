Should complain if no react in scope.

```js:no-react
var foo = <div />;
```
```output
Line 4, column 11: 'React' must be in scope when using JSX
```

```js:no-react
var React = require('react');
var foo = <div />;
```
