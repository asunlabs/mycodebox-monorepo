function Person(name) {
    this.name = name;
    this.introduce = function() {
        console.log('My name is ' + this.name); 
    }
}

// create an object
const jake = new Person("jake"); 
console.log(jake.name); 
jake.introduce(); 

// function Teacher inherits function Person
function Teacher(name, age) {
    this.name = name; 
    this.age = age;
}

// inheritage by new & prototype
Teacher.prototype = new Person(); 
const teacherJake = new Teacher("jake", 27); // create an object and deliver parameters

// Teacher function does not have method introduce but inherited it
teacherJake.introduce(); 
console.log("his age is : ", teacherJake.age)