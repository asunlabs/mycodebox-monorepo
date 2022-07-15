
document.addEventListener('DOMContentLoaded', function(){
document.getElementById('getMessage').onclick = function(){
    // Add your code below this line

    // Use XMLHttpRequest (XHR) objects to interact with servers. 
    // You can retrieve data from a URL without having to do a full page
    // refresh. This enables a Web page to update just part of 
    // a page without disrupting what the user is doing.
    // XMLHttpRequest.open(http method, url, async flag)
    const req = new XMLHttpRequest()
    req.open('GET', '/json/cats.json', true)
    req.send()
    req.onload = function() {
        const json = JSON.parse(req.responseText)
        document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(json)
    }

    // Add your code above this line
};
});
