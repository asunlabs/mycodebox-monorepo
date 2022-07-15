// None of React codes will be rendered without
// React.DOM(componentToRender,targetNode) API. 
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
            <Fruits />
            <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  ReactDOM.render(
      <TypesOfFood />,
      document.getElementById('challenge-node')      
)