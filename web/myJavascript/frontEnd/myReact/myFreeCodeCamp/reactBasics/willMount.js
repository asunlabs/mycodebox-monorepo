// Lifecycle methods : performing actions at specific points in component's lifecycle
// 1) componentWillMount
// 2) componentDidMount
// 3) shouldComponentUpdate
// 4) componentDidUpdate
// 5) componentWillUnmount
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    // componentWillMount is calld before render method
    componentWillMount() {
      // Change code below this line
        console.log("componentWillMount is removed in React ver 17++")
      // Change code above this line
    }
    render() {
      return <div />
    }
  };