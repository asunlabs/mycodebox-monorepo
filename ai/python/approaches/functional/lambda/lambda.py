
# Expressions have a value, statements do not. 
# if it is passable as a function parameter, it is an expression. 
# if not, it is statement(command)

from types import LambdaType, FunctionType
LambdaType is FunctionType

# lambda is a function without name. 
# x is a parameter, x**2 + 1 is an expression. 
# (lambda x : x**2 + 1)(2)

# myFunc takes a lambda as a argument with annotation. 
def myFunc(myLambda):
    
    # Local variable j is stored in myFunc namespace. 
    # Use locals() to check if it exists. 
    j = 0
    
    # Comprehension: create a list and add elements into it, using for statement.
    compList = [i*i for i in range(1,6)]
    print("Your comprehension list is: ",compList)

    # Calculate list summation. 
    for i in compList:    
        j += i
    
    print(f"Your list's sum is: {j}. {j} is your number.")

    # Call myLambda and return its value. 
    return myLambda(j)

result = myFunc((lambda x : x % 2))

# Check if the result is even number. 
if result == 0: 
    print("Your number is even.")
else : 
    print("Your number is odd.")



# Bonus exercise - Create a multi-table using comprehension. 
[i*j for i in range(2,10) for j in range(2,10)]