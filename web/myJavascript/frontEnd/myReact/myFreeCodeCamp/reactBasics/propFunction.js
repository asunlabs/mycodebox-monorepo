// In React, you can pass props(properties) to child components
// Props are custom HTML attributes created by you.
// <MyComponent /> : custom HTML tag(component)
// <MyComponent greeting="hello" /> : custom HTML tag attribute (props)
// custom HTML tag attribute <=> function argument
const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date} </p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };