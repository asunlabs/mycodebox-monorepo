// good
typealias Address = [String : Int] // type alias for dictionary type

func checkAddress(address : Address) -> Bool {
    var result = 0
    if address.key == "seoul" {
        result = 1
        return true 
    }
    return false
}

// ambiguous
func checkAddress2(address : [String : Int]) -> Type {
    // some functionality
}