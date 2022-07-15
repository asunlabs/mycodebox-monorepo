// ReactDOM : React's rendering API
// ReactDOM(componentToRender, targetNodeForRendering)
// ReactDOM must be called after JSX element declared

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line

ReactDOM.render(
    JSX,
    document.getElementById('challenge-node')  
);