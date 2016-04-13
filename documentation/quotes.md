Don't use double quotes in jsx, except to avoid escaping.

```js
var hello = <div id="bar" />;
```
```output
Line 4, column 21: Unexpected usage of doublequote.
```

```js
var hello = <div id="'bar'" />;
```
