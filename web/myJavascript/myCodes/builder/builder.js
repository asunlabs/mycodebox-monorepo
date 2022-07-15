// Witout builder pattern
class User {
    constructor(name, age, country) { 
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

const user_jake = new User("jake", 27, undefined) // create an object
console.log(user_jake);


// With builder pattern
class User_pattern {
    constructor() {}
}

class UserBuilder {

    constructor() {
        this.user = new User_pattern(); 
    }

    setName(name) {
        this.user.name = name;
        return this;
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setCountry(country) {
        this.user.country = country;
        return this;
    }
    build() {
        return this.user;
    }
}

const user_jake_build = new UserBuilder() // create an object
                      .setName("Jake")
                      .setCountry("England")
                      .setAge(345)
                      .build();
console.log(user_jake_build);

// Passing JS object in constructor 
class User_JSON {
    // if the keys in object(age, language, country) does not exist, returns an undefined
    // if the object key has a value, it becomes a default. 
    constructor(name, {age, language="Eng", country}={}) { 
        this.name = name;
        this.age = age;
        this.language = language;
        this.country = country;
    }
}

const user_jake_json = new User_JSON("Jake", {age:20});
console.log(user_jake_json); // result : { name : jake, age :20, language :"Eng", country : undefined}