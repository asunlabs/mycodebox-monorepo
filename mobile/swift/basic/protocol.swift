
// similar to interface in other langauges
protocol CarProto {
    var color : String { get set }  // varaibles in protocol should not have values
    func drive() // functions in protocol should not be implemented
}

// delegate suffix : naming convention for user interaction functionality
protocol CarDelegate { }

// data source suffix : naming convention for data management
protocol CarDataSource { }

class Car : CarProto {
    static var myColor = "black"
    var color : String
    func drive(parameters) -> Type {
        
    }
    init(color : String) {
        self.color = color
    }
}