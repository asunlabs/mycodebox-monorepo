# Create a class
class Cat1 : 
    def __init__(self, name):
        self._name = name

    def name(self): 
        return self._name

# Create an object with parameter. 
myCuteCat1 = Cat1("neo")

# Instance approaches to instance method "name" and calls it. 
myCuteCat1.name()

# Check instance attribute. 
myCuteCat1._name


# Python does not have constant keyword. Conventionally,
# if a variable is named in all capitals it is considered a constant.
CUTE_CATNAME = [ 
    "neo", 
    "neo2",
    "neo3",
    "lion", 
    "rose", 
    "blacky", 
    "tube"
]

class Cat2 : 
    """
    Property allows us to refer a function, like we refer to an attribute.
    With @property, an instance is able to approach instance method without calling. 
    myCuteCat.name, below, looks like it is an (object.attribute) but actually it's an (object.function) name.
    Thus, the original instance variable (self._name) is protected, usability(convenience) is also maintained.
   
    """    
    def __init__(self, name):
        self._name = name

    @property
    def name(self): #name.getter  
        return self._name

    @name.setter
    def name(self, name): #name.setter
        
        if name not in CUTE_CATNAME : 
            raise ValueError(f"{name} is not available.")
        self._name = name

    @name.deleter
    def name(self, name): #name.deleter
        raise AttributeError

# Create an object. 
myCuteCat2 = Cat2("neo2")

# Check instance attribute. 
myCuteCat2._name

# Execute name.getter
myCuteCat2.name

# Execute name.setter
myCuteCat2.name = "rose"
print(myCuteCat2.name)

# Check docstring of class Cat2. 
Cat2.__doc__
help(Cat2)