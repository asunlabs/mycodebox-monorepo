// function in object is called method
// this in method is equal to the object itself 
const myObject = {
    name:"myObject",
    do: function() {
        if (myObject === this) {
            console.log("myObject === this");
        }
    },
    checkName:function(){
        if (this.name === myObject.name) {
            console.log("myObject name === this.name"); 
        }
    }
}

myObject.do();
myObject.checkName();