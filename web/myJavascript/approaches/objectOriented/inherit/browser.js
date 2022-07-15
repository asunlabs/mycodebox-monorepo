// inheritage example : mother => children => object
// Browser - Chrome, Safari

// mother : Browser
function Browser(name) {
    this.name = name;
    this.explore = function() {
        console.log("website browsing starts");
    }
}

// children : Chrome, Chrome inherits Browser
function Chrome(name) {
    this.name = name;
    console.log("this Chrome belongs to : ", this.name);
}

Chrome.prototype = new Browser(); 
Chrome.prototype.company = ()=>{console.log("made by Google")};

// object : object made by Chrome
const myChrome = new Chrome("jake"); 
myChrome.company(); 

myChrome.explore()