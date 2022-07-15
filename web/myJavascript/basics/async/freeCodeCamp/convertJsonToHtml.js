document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line

        json.forEach((item)=>{
          const keys = Object.keys(item); 
          html += "<div class='cat'>"; 
          keys.forEach((key)=>{
            html += `<strong>${key}</strong>${item[key]}<br/>`
          }); 
          html += "</div><br/>";
        });

        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
    };
  });