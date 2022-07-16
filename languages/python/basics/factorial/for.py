
# Create a function to calculate factorial. 
def myForFact(n): 
    # Set a starting point. 
    start = 1 

    # Execute multiply operation Nth times. N is your parameter. 
    for i in range(1,n+1) :
        start *= i 
    
    # Set a ending point. You could just return start variable since this is
    # only for explicating where factorial ends. 
    end = start
    return end 

# Print the result.
print(myForFact(5))