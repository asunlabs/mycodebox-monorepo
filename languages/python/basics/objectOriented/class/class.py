# Use shift + enter to run Python interpreter in Visual Studio Code. 
# Create a class with class keyword(reserved word)
class Cat : 
    
    # Use a docstring to make your code more documentation-friendly. 
    """
    I made a Cat class because I like cat.
    Cat is the cutest animal, I think.
    """
    # Set a class attribute value with __init__ method. 
    def __init__(self, name, age): 
        """
        Every cat has its own unique name.
        Cat's life expectancy is usally somewhere between 10 to 15 years. 
        """
        self.name = name
        self.age = age

    def getCatInfo(self): 
        return self.name, self.age

# Create an object with your cat name. 
myCuteCat = Cat("Meowy Boss", 2)

# Return its name and age using the catInfo method above. 
print(f"check getter : {myCuteCat.getCatInfo()} ")

# Check the object's attribute using __dict__ method. 
myCuteCat.__dict__

# Check the class' attribute and method using __dict__ method. 
print(Cat.__dict__)

# Type help() for interactive help, or type help(object) to get
# object information. 
help(Cat)
