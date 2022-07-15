document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line

      const xhr = new XMLHttpRequest(); 
      xhr.open('POST', url, true); 

      // Set HTTP message header :  XMLHttpRequest.setRequestHeader(name, value)
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 201) { 
              // XMLHttpRequest.response returns a response body
              const serverResponse = JSON.parse(xhr.response)
              document.getElementsByClassName("message")[0].textContent = serverResponse.userName + serverResponse.suffix
          }
       }
       // Set HTTP message body 
       const body = JSON.stringify( { userName : userName, suffix: " loves cats"})

       // Send HTTP post request
       xhr.send(body)
      // Add your code above this line
    };
  });