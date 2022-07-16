# Create a class. 
# Think of a class a template you can use multiples times.
class Person:
    # constrcutor __init__ has been automatically called 
    # constructor is used to initialize an object or
    # set a initial value for variable. 
    def __init__(self):
        print("constructor: I'm born")

p = Person()
# Below, magic method __init__ automatically executes. 

# A method that is defined inside of class, it is stored in the class. 
# E.g: Person -> {"__init__": function}

""""""""""""""""""
# Create a class with a constructor and get_count function. 
class MyClass: 
    count = 0

    # Magic method, constructor.
    def __init__(self):
        MyClass.count += 1 
    
    def get_count(self):
        return MyClass.count

# Create 3 objects
m1 = MyClass()
m2 = MyClass()
m3 = MyClass()

# Print MyClass.count
print(MyClass.count)

# Print m1.get_count()
print(m1.get_count())