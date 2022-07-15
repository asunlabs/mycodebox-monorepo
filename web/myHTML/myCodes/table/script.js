const getBtn = document.querySelector("#getBtn")

const people = [
    {"name":"Jake", "age": 27, "birth":"1995.02.02"}, 
    {"name":"Smith", "age": 55, "birth":"1900.10.22"}, 
    {"name":"Elly", "age": 36, "birth":"1896.06.19"}, 
    {"name":"Brian", "age": 44, "birth":"1200.01.30"}, 
    {"name":"Paul", "age": 11, "birth":"1995.04.22"}, 
]

function addData(data) { 
    const tBody = document.querySelector("tbody")
    
    for (let i=0; i<data.length; i++) {
        const row = tBody.insertRow()
        row.innerHTML = `
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birth}</td>
                        `
    }
}

function wrapper() { 
    addData(people)
}

getBtn.addEventListener("click", wrapper)