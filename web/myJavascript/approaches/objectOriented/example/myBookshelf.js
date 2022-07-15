const bookshelf = {
    'category':{"horror":10, "romance":7, "comedy":5}, 
    'count':function(){
        // 'this' keyword in Javascript is a resevered keyword, 
        //  which points to the object that it belong to. 
        let total = 0;
        for (key in this.category){ 
            total += this.category[key];
        }
        console.log(total); 
    }
}

// language comparision 1 : struct in Go
bookshelf.category; 

// language comparision 2 : method in Go
bookshelf.count();

// Can add property to const keyword object. 
// When you're adding to an array or object you're not 
// re-assigning or re-declaring the constant, it's already
// declared and assigned, you're just adding to the "list" 
// that the constant points to.
// reference : https://stackoverflow.com/questions/23436437/why-can-i-change-a-constant-object-in-javascript
bookshelf.material = {1:"metal", 2:"wood"};

console.log(bookshelf.material); 
console.log(bookshelf);

// Can't change constant variable
const value = "hello";
value = "not hello";
console.log(value);