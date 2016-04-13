Only pass false as boolean values (doesn't count variables);

```js
let Greeting = require('./Greeting');

var foo = <Greeting personal={true} />;
```
```output
Line 6, column 21: Value must be omitted for boolean attributes
```

The following examples are all ok

```js
let Greeting = require('./Greeting');

var foo = <Greeting personal={isGreetingPersonal} />
```

```js
let Greeting = require('./Greeting');

var foo = <Greeting personal={false} />
```

```js
let Greeting = require('./Greeting');

var foo = <Greeting personal />
```
