// React is a Javascript view library => you can run JS on 
// the server with Node js => you can render React on the server
// Do this for 1) faster page load in web browser 
// 2) improving search engine optimization
// ReactDOMServer.renderToString method 
class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // Change code below this line
ReactDOMServer.renderToString(<App/>)