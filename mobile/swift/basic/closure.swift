// closure, lamda

var myFunction : ((Int) -> Bool) = { num in // put the parameter name to closure
    if num > 3 {
        return true
    }
    return false
}

print(myFunction(4))

func isGreaterThanThree(num : Int) -> Bool {
    guard num > 3 else { return false }
    return true
}

