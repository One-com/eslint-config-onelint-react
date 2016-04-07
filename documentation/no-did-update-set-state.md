Don't setState in componentDidUpdate.

```js
class Hello extends React.Component {
    componentDidUpdate() {
        this.setState({
            foo: 'bar'
        });
    }
    render() {
        return <div>Hello {this.state.name}</div>;
    }
}
```
```output
Line 6, column 9: Do not use setState in componentDidUpdate
```
