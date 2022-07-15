import Foundation
import UIkit

enum States {
    case InProgress
    case Aborted
    case Complete
    case WillStart
}

var current : States?
current = .InProgress // can omit States prefix

var color : UIColor? 
color = .red // same with UIColor.red

// enum can inherit like class and struct
enum Name: String {
    case first = "Jake"
    case second = "Brian"
}