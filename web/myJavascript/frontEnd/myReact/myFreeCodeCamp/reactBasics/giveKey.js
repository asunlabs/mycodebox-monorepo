// In React, each list item needs a key attribute
// Each key is unique between the list items
// Array index can be used but recommend to use a unique identification

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(item=><li key={Math.random()*frontEndFrameworks.length}>{item}</li>); // Change this line
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };