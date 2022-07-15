import Foundation
let numbers = [1, 2, 3, 4, 5] // constant 

for num in numbers {
    print(num,"th number : ", num)
}

var count = 0

while count < 5 {
    print("called")
    // count++ // bad 
    count += 1 // good
}