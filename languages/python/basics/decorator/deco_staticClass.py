import random


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
    
    catBreeds = [
        "Persian",
        "Maine Coon",
        "Bengal",
        "Ragdoll",
        "British Shorthair"
    ]

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

    #  Staticmethod: Convert a function to be a static method. 
    #  Often used to implement factory function which generates objects.
    #  takes no implicit first argument. Set all the parameters needed one by one.
    @staticmethod 
    def random_catName(): 
        return Cat2(random.choice(CUTE_CATNAME))

    # Classmethod: Convert a function to be a class method.
    # take a class as implicit first argument. 
    # Use classmethod when different objects needs to be addressed in the same way. 
    @classmethod
    def find_breeds(cls): 
        return cls.catBreeds

# Create an object
myCat = Cat2("neo")

# Change instance attribute. === Result A
myCat.catBreeds = [1,2,3]
myCat.catBreeds

# Check if the classmethod works. === Result B
# Notice that result A and B do not have the same value. 
Cat2.find_breeds()

# Check if the staticmethod works. 
for x in CUTE_CATNAME:
    cn = Cat2.random_catName()
    print(cn.name)



    

