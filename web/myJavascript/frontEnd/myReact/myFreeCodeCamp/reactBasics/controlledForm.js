// User typing input => React controlled input form. 
// e.g. textarea, input (mutable) => React state 
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '', 
        submit:''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      // Change code above this line
    }
    // Change code below this line
    handleChange(event) { 
        this.setState({input:event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({submit:this.state.input})
    }
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange}/>
            <button type='submit'>Submit</button>
          </form>
          <h1>{this.state.submit}</h1>
          { /* Change code above this line */}
        </div>
      );
    }
  };