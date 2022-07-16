
# Create a recursive function to calculate factorial. 
def myRecursive(n): 
    # Set a ending point. 
    if n == 1: 
        return 1

    # myRecursive successively calls itself with a parameter which
    # becomes lower by 1 than previous one. 
    return n * myRecursive(n-1)


# Create a myRecursive2 function using inline if statement and tail-recursion.
def myRecursive2(n, result=1): 
    return result if n == 0 else myRecursive2(n-1, n*result)  


# myRecursive2(n, result=1)
# myRecursive2(n = n-1, result = n * result)

# n = 5 : myRecursive2(5, 1) ===> myRecursive2(4, 5*1)
# n = 4 : myRecursive2(4, 5*1) ===> myRecursive2(3, 4*5*1)
# n = 3 : myRecursive(3, 4*5*1) ===> myRecursive2(2, 3*4*5*1)
# n = 2 : myRecursive(2, 3*4*5*1) ===> myRecursive2(1, 2*3*4*5*1)
# n = 1 : myRecursive(1, 2*3*4*5*1) ===> myRecursive2(0, 1*2*3*4*5*1)
# n = 0 : myRecursive(0, 1*2*3*4*5*1) ===> 1*2*3*4*5*1 == 5! 

# Print the result. 
print(myRecursive(4))
print(myRecursive2(5))