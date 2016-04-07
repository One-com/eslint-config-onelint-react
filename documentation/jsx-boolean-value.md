Only pass false as boolean values (doesn't count variables);

```js
var foo = <Greeting personal={true} />;
```
```output
Line 4, column 21: Value must be omitted for boolean attributes
```

The following examples are all ok

```js
var foo = <Greeting personal={isGreetingPersonal} />
```

```js
var foo = <Greeting personal={false} />
```

```js
var foo = <Greeting personal />
```
