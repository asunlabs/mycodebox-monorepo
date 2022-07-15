class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange = (event) => {
        this.setState({ input : event.target.value })
    }
    submitMessage = () => {
        this.setState( { messages : this.state.messages.concat(this.state.input) })
        this.setState( { input : "" })
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
            <input onChange={this.handleChange} value={this.state.input}/>
            <button onClick={this.submitMessage}></button>
            <ul>{this.state.messages.map(item => <li key={Math.random()}>{item}</li>)}</ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };