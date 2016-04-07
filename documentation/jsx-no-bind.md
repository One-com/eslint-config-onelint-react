Do not allow creating new function instances through bind in a render method, by
use of arrow functions or Function#bind.

```js
function noBind() {
    return <div onClick={() => console.log('Hello!')}></div>;
}
```
```output
Line 6, column 17: JSX props should not use arrow functions
```

The following pattern should be used instead:

```js

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
    }
    handle() { /* ... */ }
    render() {
      return <div onClick={this.handle}>Hello World</div>;
    }
}

```
