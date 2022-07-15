import React from 'react';

function App() {
  const [name, setName] = React.useState([])
  React.useEffect(()=> {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => setName(data))
      .catch((err) => console.log(err))
  }, [ ])  
  return (
    <div className="App">
      {name && name.map((item) => {
        return <p key={Math.random()}>{item.name}</p>
      })}
    </div>
  );
}

export default App;
