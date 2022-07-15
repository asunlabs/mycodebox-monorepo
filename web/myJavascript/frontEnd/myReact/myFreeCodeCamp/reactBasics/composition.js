// Using arrow function is a very common practice in React
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        // JSX should have one parent element
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
            <ChildComponent />
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };