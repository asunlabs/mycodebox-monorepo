// Function.bind(this, args)
// The bind method create a new function that wraps an original function
// The new function has its 'this' keyword set to provided values.
// Calling bounding function will execute the wrapped original function
// and return a copy of the given function with the specified this value
// and intial arguments. 
// bind : binds a function with an object
// see here for more details
const bookshelf = {
    count:20,
    getBookNumbers: function(){
        return this.count;
    }
}

const testing = bookshelf.getBookNumbers;
console.log(testing()); // undefined

const testing2 = testing.bind(bookshelf);
console.log(testing2()); // 20 

