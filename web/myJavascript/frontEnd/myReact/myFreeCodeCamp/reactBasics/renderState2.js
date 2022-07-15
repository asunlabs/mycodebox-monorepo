class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // In render method, you can write Javascript directly before return statement.
      // And they can be accessed in return statement.
      // Change code below this line
      const name = this.state.name // doesn't need curly braces for JS value 
      // Change code above this line
      return (
        <div>
          { /* Change code below this line : needs curly braces for JS value*/ }
            <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };