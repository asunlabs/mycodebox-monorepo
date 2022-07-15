const API_URL = "https://jsonplaceholder.typicode.com/todos/"
const request = new XMLHttpRequest()
const display = document.querySelector(".display")
const getBtn = document.querySelector(".getBtn")

// request.addEventListener("readystatechange", ()=>{
//     console.log(request,request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText)
//     }
// })

getBtn.addEventListener("click", Wrapper)

function getRandomAPI() { 
    return Math.floor(Math.random()*100)
}

function sendXHR() {
    const randomNumber = getRandomAPI()
    request.open('GET', `${API_URL}${randomNumber.toString()}`, true)
    request.send()
}

function displayRequest() {
    request.addEventListener("load", ()=>{
        const jsonObject = JSON.parse(request.responseText) // userId, id, title, completed
        const jsonArray = JSON.stringify(jsonObject).split(", ")
        let html = ""
    
        jsonArray.map((item)=>{ 
              html += "<div class=display>"
              html += `<p> userId : ${jsonObject.userId}, <br>
                           id : ${jsonObject.id} <br>
                           title : ${jsonObject.title} <br>
                           completed : ${jsonObject.completed} </p>`
             console.log(typeof(item))
              html += "</div>"
        })
    
        display.innerHTML = html
    })
}

function Wrapper() {    
    sendXHR()
    displayRequest()
}