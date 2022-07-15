"use strict";
// Create a concrete class : child class
// Jake_human is an instance of the Animal class
const Jake_human = {
    age: 27,
    walkOn(road = "London") {
        return `Jake is walking on ${road}`;
    }
};
console.log(Jake_human.walkOn("Tokyo"));
const Roads = (entity) => {
    return entity.walkOn("Seoul");
};
console.log(Roads(Jake_human));
