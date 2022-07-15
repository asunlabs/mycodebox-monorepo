// State is useful to track data changes and to reflect the changes 
// in your UI. When the state is changed, React only renders the actual DOM
// where only necessary, making us not having to worry about the DOM.
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }

    // Once state is defined, it can be accssed in render method.
    render() {
      return (
        <div>
          { /* Change code below this line */ }
            <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };