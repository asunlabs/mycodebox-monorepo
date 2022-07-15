// wrapper object is created when primitive data type is used.

const myStr = "hello wrapper";
console.log(myStr.toUpperCase()); // method 1  
console.log(myStr.charAt(0)); // method 2
console.log(myStr.length); // property

// Javascript temporaily create a wrapper object and deletes it. 
// primitive data -> (wrapper object created) -> property, method used -> (wrapper object deleted)