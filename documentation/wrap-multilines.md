Wrap multiple JSX in parens.

```js
function Pure() {
    return <h1>
      Foobar
    </h1>;
}
```
```output
Line 5, column 12: Missing parentheses around multilines JSX
```

```js
function Pure() {
    return (
        <h1>
            Foobar
        </h1>
    );
}
```

Single lines do not need to be wrapped.

```js
function Pure() {
    return <h1>Foobar</h1>;
}
```
