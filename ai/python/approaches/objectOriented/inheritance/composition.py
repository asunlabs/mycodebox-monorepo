
# Create a class 
class Add : 
    def __init__(self, value1, value2): 
        self._value1 = value1
        self._value2 = value2

    def __call__(self): 
        return self._value1 * self._value2

# Create an object
a = Add(100,20)

# Call __call__() to operate multiplication. 
# a() == a.__call__().
a.__call__()
a()
  

# Call __call__() to operate multiplication.
Add(100,20).__call__()
Add(100,20)()

# Object and class is callable.
callable(a), callable(Add)


# Create a function meow. 
def meow(self, sound):
    return sound + " is how cat sounds like."

# Create a cat class
class Cat : 
    def __init__(self, name): 
        self.name = name
    
    # Assign function meow to variable meow(class attribute meow). 
    # As soon as it is assigned, now it becomes a class fuction. 
    meow1 = meow
    meow2 = "I'm a class attribute"

# Create an object
c = Cat("nabi")

# Call meow1. 
c.meow1("meow")

# Check Cat.meow1 if it is a variable or function. 
type(Cat.meow1), callable(Cat.meow1)

# Check c.meow2, Cat.meow2 : What is a class attribute and what is an object attribute? 
Cat.meow2
c.meow2 = "changed"
c.meow2
Cat.meow2


# Composition is a way to borrow other classes' function. 
# Use composition when taking advantage of other classes and 
# avoid to inherit everything. 

class CatinRoomA : 
    # Define what cat does in room A : 1) sleep 2) purr 3) meow
    def __init__(self, sleep, purr, meow): 
        self.sleeps = sleep
        self.purrs = purr 
        self.meows = meow
    
    def sleep(self):
        return self.sleeps
    
    def purr(self): 
        return self.purrs

    def meow(self):
        return self.meows

class CatinRoomB : 
    def __init__(self, eat, sleep, purr, meow): 
        self.eats1 = eat
        self.meows = meow
        # Get CatinRoomA object and save it. 
        self.CatinRoomA = CatinRoomA(sleep, purr, meow)

    def eat(self): 
        return self.eats

    def meow(self):
        # Execute CatinRoomA meow method.
        return self.CatinRoomA.meow()

# Create an object.
cb = CatinRoomB("milk", "8 hours", "purr", "meow")

# Call meow method in CatinRoomA. 
print(cb.meow())
