// State updates in React are done asynchronously, meaning
// you can't assume the previous values of state and props. 
// Wrap the object literal in parentheses so that it can be 
// understood as a single element. 
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this)
      // Change code above this line
    }
    // Change code below this line
    // Passing a function to setState method ensures us to take the most
    // current values of props and state. 
    // setState(updater, callback). The updater can be an object or a function
    toggleVisibility() {
        this.setState((state) => ({
            visibility : !(state.visibility) // 'this' should not used in setState, Don't forget to use parenthesis to remind this is a single value, not code blocks.
        })) 
    }  
    // Change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }