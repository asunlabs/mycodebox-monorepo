// tutorial here : https://youtu.be/-rNQeJi3Wp4
const submitBtn = document.querySelector("#submitBtn");
const displayHere = document.querySelector("#display");
const resetBtn = document.querySelector("#resetBtn");
const formOutputTbody = document.querySelector("#formOutputTbody");

let selectedRow = null;

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const isFilledOut = validateFormData();
    if (isFilledOut) {
        selectedRow === null ? createFormDataOutput(readFormData()) : updateFormData()
        resetFormData();
    } 
});

resetBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    resetFormData();
});

// readFormData reads form inputs 
function readFormData() {
    const formData = {}; // formData contains form input values
    formData.fullName = document.querySelector("#fullName").value;
    formData.empCode = document.querySelector("#empCode").value;
    formData.salary = document.querySelector("#salary").value;
    formData.city = document.querySelector("#city").value;
    return formData;
}

// createFormDataOutput creates form output 
function createFormDataOutput(readFormData) {

    // add a new row in the table
    const newRow = formOutputTbody.insertRow(-1);

    // add a new cell in the row
    const nameCell = newRow.insertCell(0);
    const empCell = newRow.insertCell(1);
    const salaryCell = newRow.insertCell(2);
    const cityCell = newRow.insertCell(3)
    const editAndDeleteCell = newRow.insertCell(4);

    // display form input data into the cells 
    nameCell.innerHTML = readFormData.fullName;
    empCell.innerHTML = readFormData.empCode; 
    salaryCell.innerHTML = readFormData.salary; 
    cityCell.innerHTML = readFormData.city;
    editAndDeleteCell.innerHTML = `<a onClick="editFormData(event)">Edit</a>
                                   <a onClick="deleteFormData(event)">Delete</a>`;
}

// resetFormData resets form inputs 
function resetFormData() {
    document.querySelector("#fullName").value = "";
    document.querySelector("#empCode").value = "";
    document.querySelector("#salary").value = "";
    document.querySelector("#city").value = "";
    selectedRow = null;
}

// editFormData edits form inputs
function editFormData(event) {
    selectedRow = event.target.parentNode.parentNode;

    const formInputs = document.querySelectorAll("input"); 
    for (let i=0; i < formInputs.length-2; i++) {
        formInputs[i].value = selectedRow.cells[i].innerHTML; 
    }
}

// updateFormData updates form inputs
function updateFormData() {
    const getFormData = readFormData();

    console.log(Object.values(getFormData));
    for (let j=0; j < selectedRow.cells.length-1; j++) { 
        selectedRow.cells[j].innerHTML = Object.values(getFormData)[j]; 
    }
}

// deleteFormData deletes form inputs
function deleteFormData(event) {

    // confirm function returns a boolean value
    if (confirm("Delete this data?")) { 
        const row = event.target.parentNode.parentNode;
        console.log(row);
        console.log(row.rowIndex);
        console.log("hello");
        formOutputTbody.deleteRow(row.rowIndex-1);
    }
}

// validateFormData checks validation of form inputs
function validateFormData() {
    let isFilledOut = false; 
    const getFormData = readFormData();

    if (getFormData.fullName === "") { 
        alert("Your name is required");
        return isFilledOut;
    } else { 
        isFilledOut = true; 
        return isFilledOut; 
    }
}