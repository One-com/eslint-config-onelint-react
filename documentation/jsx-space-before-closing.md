Have a space before a closing bracket in JSX.

```js
var Foo = require('./Foo');

var bar = <Foo/>;
```
```output
Line 6, column 15: A space is required before closing bracket
```

```js
var Foo = require('./Foo');

var bar = <Foo foo='foo'/>;
```
```output
Line 15, column 25: A space is required before closing bracket
```

```js
var Foo = require('./Foo');

var bar = <Foo />;
```

```js
var Foo = require('./Foo');

var bar = <Foo foo='foo' />;
```

```js
var Foo = require('./Foo');

var bar = (
    <Foo
        foo='foo'
    />
);
```
