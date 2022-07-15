// Inline styles is very common in React development
// Set property and value in Javascript object form. CamelCased.
class Colorful extends React.Component {
    render() {
      return (
        <div style={
            {
                color: "red",
                fontSize: 72 // unit px is omitted
            }
        }>Big Red</div>
      );
    }
  };