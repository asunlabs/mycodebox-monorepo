// private variable is used in closer environment to protect data.
// using a private variable forces developers to approach/change the data
// only through get/set method. 

// create a closer and private variable in Javascript
function bookshelf(category) {
    let categories = [];
    return {
        get_category: function() {return categories;}, 
        set_category: function(_category) { 
            category = _category;
            categories.push(category); 
        }
    }
}

const comedy = bookshelf("comedy");
comedy.set_category("three idiots");
comedy.set_category("boss baby");

// array categories is protected by priviate variable and closer.
console.log(comedy.get_category());  
