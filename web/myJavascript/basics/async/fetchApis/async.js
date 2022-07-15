/// usage guide from JSON placeholder
// see here : https://jsonplaceholder.typicode.com/guide/

const display = document.querySelector(".display")
const display_post = document.querySelector(".display-post")
const display_delete = document.querySelector(".display-delete")
const display_update = document.querySelector(".display-update")

const getBtn = document.querySelector(".getBtn")
const postBtn = document.querySelector(".postBtn")
const deleteBtn = document.querySelector(".deleteBtn")
const updateBtn = document.querySelector(".updateBtn")

// XMLHttpRequest : GET reqeust
function getJSON() {  
        // XHR object allows us to retrieve data from a URL without 
        // having to do a full page refresh.
        const request = new XMLHttpRequest()
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/2', true)
        request.send()
        
        request.addEventListener("load", ()=>{
            const test = request.response
            const test1 = JSON.parse(request.responseText)
            display.innerHTML = JSON.stringify(test1)
        })
}

// XMLHttpRequest : POST request
function postJSON() {
    const request = new XMLHttpRequest()
    request.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    request.addEventListener("readystatechange", ()=> {
        if (request.status === 201 && request.readyState === 4) { 
            const response = JSON.parse(request.responseText)
            display_post.innerHTML = JSON.stringify(response)
        }
    })

    // server receives JSON in string.
    const body = JSON.stringify({ userId : 1, title : "sending post request", body : "for test" })
    request.send(body)
}

// Fetch API : DELETE request
async function deleteJSON() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: "DELETE",
    })

    if (result) { 
        display_delete.textContent = "Successfully deleted"
    }
}

// Fetch API : UPDATE request
function updateJSON() {

    fetch("https://jsonplaceholder.typicode.com/posts/10")
        .then((res)=> {return res.json()} )
        .then((data)=> {
          display_update.innerHTML = JSON.stringify(data)
        })

    setTimeout(()=>{
        if (confirm("update the JSON?")) {
            fetch("https://jsonplaceholder.typicode.com/posts/10", {
                method: 'PUT', 
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }, 
                body : JSON.stringify({
                    title : "updated title", 
                    body : "updated body", 
                    userId : "updated userId"
                })
            }).then((res) => { return res.json()})
                .then((data)=> {
                    display_update.innerHTML = JSON.stringify(data)})
        }
    }, 2000)
}

getBtn.addEventListener("click", getJSON)
postBtn.addEventListener("click", postJSON)
deleteBtn.addEventListener("click", deleteJSON)
updateBtn.addEventListener("click", updateJSON)




// Usage example
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'wow',
//     body: 'helo',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => {
//     display_post.innerHTML = JSON.stringify(json)
//   });