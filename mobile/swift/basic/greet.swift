import Foundation

func greet(_ something: String) -> String {
  let greeting = "Hello, " + something + "!"
  return greeting
}

// Prints "Hello, World!"
print(greet("World"))

// Prints "Hello, Swift!"
print(greet("Swift"))
