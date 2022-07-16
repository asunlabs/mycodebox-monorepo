# import wraps from functools. 
from functools import wraps

# Create a function without @wraps. 
def not_wrapped(myFunc): 
    """
    I'm a docstring of function not_wrapped.
    """
    # here stands @wraps(myFunc)
    def inner(*args, **kwargs): 
        return myFunc(*args, **kwargs)
    return inner

@not_wrapped
def cat(yourCatName):
    """
    A cute cat meows in the kitchen. So cute. 
    """ 
    if type(yourCatName) == str : 
        return yourCatName
    else : 
        raise ValueError

# cat.__name__ returns "inner", not "cat" because the meta info of 
# the cat function has not been delivered. 
# cat.__doc__ returns none because of the same reason above. 
print(cat.__name__) 
print(cat.__doc__)

print(cat("neo"))



def iam_wrapped(myFunc2): 
    """
    I'm a docstring of function iam_wrapped.
    """
    # @wraps(myFunc2) delivers the meta info of the executing function. 
    @wraps(myFunc2)
    def inner(*args, **kwargs): 
        return myFunc2(*args, **kwargs)
    return inner

@iam_wrapped
def cat2(yourCatName):
    """
    A happy cat purrs in the kitchen. So cute. 
    """ 
    def checkName() : 
        print("Jake")
    
    # if an entered parameter type is string, return the string. 
    # else, raise ValueError. 
    if type(yourCatName) == str : 
        checkName()
        return yourCatName
    else : 
        raise ValueError

# cat2.__name__ returns "cat2".
# cat2.__doc__ returns "A happy cat ~ so cute."
print(cat2.__name__)
print(cat2.__doc__)

print(cat2("dragon"))