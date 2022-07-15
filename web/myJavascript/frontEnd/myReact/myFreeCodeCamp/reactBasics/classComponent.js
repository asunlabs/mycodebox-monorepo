// React components inherit React.Component, 
// accessing local state and lifecycle hooks.
// constructor : object initialization
// super() : calling parent class(React.Component)'s constructor, 
// meaning obejct initialization in parent class
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        )
      // Change code above this line
    }
  };