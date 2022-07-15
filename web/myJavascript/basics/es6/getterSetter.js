// getting and setting an object's value is done with 
// getter, setter method. 
// Getter functions are meant to simply return (get) 
// the value of an object's private variable to the user
// without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of 
// an object's private variable based on the value passed 
// into the setter function. This change could involve 
// calculations, or even overwriting the previous value completely.
// Getters and setters are important because they hide 
// internal implementation details.


// Only change code below this line
class Thermostat {
    constructor(fahreneit) { 
        this.fahreneit = fahreneit
    }
    get temperature() {
        return 5/9 * (this.fahreneit - 32)
    }

    set temperature(Celsius) {
        this.fahreneit = Celsius * 9/5 + 32
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius