// javascript provides built-in objects(essential tools for programming)
// for example : Object, Function, Array, String, Boolean, 
// Number, Math, Date, RegExp
// Depending on host environment, provided built-in objects can be
// different. 
// built-in object <-> user-defined object <-> hybrid object(user+built-in)

const city = new Array('seoul', 'london', 'tokyo', 'beijing');
function getRandomCity() {
    // Math.floor : round up
    // Math.random : random number between 0~1 
    const index = Math.floor(Math.random()*city.length);
    console.log(city[index]); 
}

getRandomCity();