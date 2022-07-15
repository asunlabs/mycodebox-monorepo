// conditional statement with && logical operator
// format : { condition && <p>markup</p> }
// returns the markup if the condition is true, if not returns false with no markup
// used to replace a lot of if~else statement in complicated conditions

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           { this.state.display &&  <h1>Displayed!</h1> }
         </div>
      );
    }
  };