// visualize what you are going to create before you create it.
// e.g : how it will be used, in what context it functions well

// Declare the prototype of the Object
// this in method points to the object where the method belongs to
// use 'this' keyword based on the object's logic(where the method belongs to)
Object.prototype.findTreasure = function(where) {
    for (const cityName in this) {
        if (this[cityName] === where) {
            console.log("treasure is at : ", this[cityName]); 
            return
        }
    }
    console.log(`your treasure is at : ${where}, treasure gone`); 
    return
}

// object city and treasure inherits the property findTreasure since 
// Object is the parent of all the objects.
const city = ['seoul','tokyo', 'london', 'berlin'];
const thanosJam = {name:'Thanos', location:'seoul'}; 


city.findTreasure('seoul'); 
thanosJam.findTreasure(city[2]); 

// be careful to use Object.prototype since it affects every children objects.
// note that below findTreasure is printed as a result of key values.
for (let name in thanosJam) {
    console.log(name); // result : name, location, findTreasure 
}

// method hasOwnProperty distinguishes object's own property and inherited one. 
// hasOwnProperty is a prototype property of Object.
// Object.prototype.hasOwnProperty : meaning that it is available in all the objects
// for example, 
for (let key in city) {
    if (city.hasOwnProperty(key)) {
        console.log(city[key]); // result : seoul, tokyo, london, berlin
    }
}