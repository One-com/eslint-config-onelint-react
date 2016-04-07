You should always supply PropTypes to your components.

```js
class Foo extends React.Component {
    render() {
        return <h1>Foo: {this.props.bar}</h1>;
    }
}
```
```output
Line 6, column 37: 'bar' is missing in props validation
```

Even for children! (use React.PropTypes.node)

```js
class FooHeader extends React.Component {
    render() {
        return <h1>Foo: {this.props.children}</h1>;
    }
}
```
```output
Line 19, column 37: 'children' is missing in props validation
```

# Good:

```js
class FooHeader extends React.Component {
    render() {
        return <h1>Foo: {this.props.children}</h1>;
    }
}

FooHeader.propTypes = {
    children: React.PropTypes.node
};
```

```js
function pureFooBar(props) {
    return <h1>Foo: {props.bar}</h1>;
}

pureFooBar.propTypes = {
    bar: React.PropTypes.string
}
```
