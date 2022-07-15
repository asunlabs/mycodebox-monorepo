enum Direction {
    case North
    case South
}

func changeDirection() -> Direction {
    switch dir {
    case .North:
        print("current : North. Change to South")
        dir = .South
        return dir
    case .South:
        print("current : South. Change to North")
        dir = .North
        return dir
    default:
        return dir
    }
}

var dir : Direction = Direction.North 
changeDirection()

