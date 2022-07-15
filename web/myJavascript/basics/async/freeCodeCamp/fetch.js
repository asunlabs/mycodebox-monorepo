document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
      // Add your code below this line

      fetch('/json/cats.json')
           .then(response => response.json())
           .then( (data) => {
                document.getElementById('message').innerHTML = JSON.stringify(data)
           })

      // Add your code above this line
    };
  });