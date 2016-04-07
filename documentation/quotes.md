Don't use double quotes in jsx, except to avoid escaping.

```js
var hello = <Foo bar="bar" />;
```
```output
Line 4, column 22: Unexpected usage of doublequote.
```

```js
var hello = <Foo bar="'bar'" />;
```
