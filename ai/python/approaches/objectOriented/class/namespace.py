
# Namespace is a place where identifiers are stored. 
# Namespace in Python is created at : 1) Module 2) Class 3) Function
# Use __dict__ method to check namespace. 
  
class Country : 
    # Define class attribute. Class attribute is shared by all the objects.
    myCountry = "South Korea"

    # Instance attribute is only defined in __init__ function.
    def __init__(self): 
        # Define object attribute
        self.score = 100
        Country.myCountry = "Unified Korea"
        print(locals())

    print(locals())

# Create an object.
# Instance = Class()
# Instance is created when an object is stored in memory.
where = Country()

# Check class attribute and namespace
# Execute Country.myCountry before creating an object === (1)
# Execute Country.myCountry after creating an object === (2)
# Compare result (1), (2) to check what is different
Country.myCountry
Country.__dict__


# Check object attribute and namespace
where.score
where.__dict__
where.myCountry