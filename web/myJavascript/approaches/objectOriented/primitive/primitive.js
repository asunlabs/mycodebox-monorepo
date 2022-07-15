// primitive type : 1) number 2) string 3) boolean 4) null 5) undefined
// all the other types are objects. Primitive data and other data are
// differentiated since they are respectively processed in Javascript
// Array(object).length => . is the object access operator. 

const myStr = "javascript";
myStr.sayhi = "hello ";
console.log(myStr.sayhi); // result : undefined. no error caused
// javascript temporaily generates an object for the primitive 
// date type(in this case variable myStr) and then removes it. 
// the generated object is called a wrapper object. 