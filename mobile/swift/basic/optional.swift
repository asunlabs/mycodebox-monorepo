// optional type

// bad
var name = "Jake"
name = nil 

// good
var myName : String? = "Jake" // myName variable might be a String or not.
myName = nil 
print(type(of: myName)) // type : Optional(String)

// bad 
var x : Int? = 1 // type : Optional(Int)
var y : Int? = 2 // type : Optional(Int) 
let result = x + y // can't perform 

// good
if let val = x {
    if let val2 = y {
        let result = val + val2 // performable
        print(result)
    }
}