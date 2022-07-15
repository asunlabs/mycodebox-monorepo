// State is a simply Javascript object. State consists of any data that your app needs to handle. 
// The app needs to constantly refelct state changes and 
// returns an updated UI.
// Declare and get initialized in consturctor with keyword 'state'. 
// Must create a class component to create state. 
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state ={ name : "Jake"}
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};