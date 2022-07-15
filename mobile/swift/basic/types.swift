import Foundation
import UIkit // swift ui kit

// types 
var x = 3 // integer
var name = "Jake" // string 
var lastName : String = "Sung" // type cast
var lastName2 = "Sung" // type inference by swift

let price : Double = 399.99
var height : Float = 2000.11

var button1 : UIButton = UIButton() // type cast for ui
var isComplete : Bool = false

if price > 300 {
    isComplete = true
}

// primitive numbers in swift
var a : Int = 1 
var b : Double = 2.00
var c : Float = 1.00000000000001

// bad
var result = a + b // different type

// good 
var result = a + Int(b) // type conversion