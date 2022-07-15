// React supports a prop type checking. 
// MyComponent.propTypes = { myFunc : PropTypes.func } or
// MyComponent.propTypes = { myFunc : PropTypes.func.isRequired } to show a warning
// when not provided. 
// import PropTypes from 'prop-types' in React v15.5.0++
// Check React version with : npm veiw react version
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = { quantity : PropTypes.number.isRequired }
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };