# Variable in Python is a label attached to object
# It is not a container for object but rather 
# it acts as a pointer/reference to the object
a = [1,2,3]

# Different names can be set for the same object
b = a

# Change is reflected in both a and b 
a.append(999)

print("This is list b: ", b)
print("This is list a: ", a)

# Name in Python does not have a specific type unlike it does
# in languages like C and Java. No declaration needed in initializing in Python.
c = 1
print(type(c)) # class 'int'

c += 0.01
print(type(c)) # class 'float' 

# Interpreter searches here next --- B
a = 10; b = 20

def myFunc() -> None: 
    
    # Interpreter searches here first --- A
    global a
    
    # Change value
    a = 999 # global scope
    b = 888 # local scope
    
# Each time a function executes, a new local namespace is created, containing the names of
# the paramters and variables from the function. Python interpreter searches function's local namespace first, 
# and then global one(module-wise). And then it searches lastly built-in namespace.
# Namespace searching order: function -> global(module) -> built-in 
myFunc()

print("This is a: ", a, ", This is b: ", b)