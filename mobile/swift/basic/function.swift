func returnName(_ name : String) -> String {
    let checkName = name + " Sung"
    return checkName
}

var myName = returnName("Jake")
print(myName)

func addTwoNumber(num1 : Int, num2 : Int) -> Int {
    let result = num1 + num2
    return result
}

func squareNumber(num : Int) -> Int {
    return num * num
}
print(squareNumber(num : 9)) // expected result : 81

// don't forget to provide label for function parameter
print(addTwoNumber(num1 : 1, num2 : 2)) 