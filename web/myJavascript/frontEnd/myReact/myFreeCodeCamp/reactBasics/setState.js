// React provides a way to update component state : setState method
// The setState method can be accessed in the class component with 
// this.setState keyword. State update should only be done with setState method.
// Updates through the setState method is asynchronous
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
      // setState(updater, callback(optional)) : updater can be either an object or
      // a function that returns such an object. 
        this.setState({ name : "React Rocks!"})
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };