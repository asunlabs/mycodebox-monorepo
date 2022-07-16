
# import reduce from functools
from functools import reduce

# Create a function calculating factorials. 
def myFactorial(n): 
    
    # Add natural numbers into a list as much as parameter entered.
    myInput = [x for x in range(1,n+1)]

    # Calculate (parameter!) using reduce fuction. 
    result = reduce(lambda x, y: x*y, myInput)

    # Print the result.
    return result

# Check the result. 
print(myFactorial(5))

