func isGreaterThanFive(num : Int) -> Bool {
    if num > 5 {
        return true
    }
    return false
}

func isGreaterThanFiveWithGuard(num : Int) -> Bool {
    // guard : variation of if~else
    guard num > 5 else {
        print("number should be greater than 5")
        return false
    }
    // num value is guarded and function continues to execute
    print("number is greater than 5! good to go")
    return true
}

func multipleGuard(num : Int) -> Int {
    guard num > 5, num < 10 else { print("number should be between 5 to 10") return 0 }

    return num + 10
}

var text : String? 
text = "hello text"

if let value = text { // assign optional type to value
    print(value)
}

func printValue(parameters) {
    guard let value = text else {
        print("text should be assigned")
        return
    }
    print(value)
}