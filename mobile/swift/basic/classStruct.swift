import Foundation

// class : reference type
class Human { 
    var name : String
    var age : Int

    // init is a special type of function
    init(name : String, age : Int) {
        self.name = name
        self.age = age
    }
}

// create a class instance
var jake = Human(name : "Jake Sung", age : 27)
var brian = Human(name : "Brian Hardy", age : 11)

print(jake.name)
print("brian is : ", brian.age)

var notJake = jake
notJake.name = "not Jake Sung"
print(jake.name) // expected result : not Jake Sung (class is a reference type)


// struct : value type
struct Car {
    var name : String
    var age : Int
    init(name : String, age : Int) {
        self.name = name
        self.age = age
    }
}

// create a struct instance
var myCar = Car(name : "Honda", age : 2022)
print(myCar.name, myCar.age)

var notMyCar = myCar
notMyCar.name = "not Honda"

print(myCar.name) // expected result : "Honda", struct is a value type
