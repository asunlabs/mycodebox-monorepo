// array in swift
var intArray : [Int] = [1,2,3]
var stringArray : [String] = ["hello", "swift"]
var anyArray : [Any] = [1, 1.25, "wow"]

// dictionary in swift : lookup is fater than array
var petDict : [String : Int] = ["cat" : 1, "dog" : 2]

// iterate the dictionary 
for pet in petDict {
    print(pet)
    print(pet.values)
    print(pet.key)
}