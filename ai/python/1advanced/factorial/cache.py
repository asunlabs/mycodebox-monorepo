
# import time module to measure how much time a function takes to complete.
import time

# Declare a global variabl in a dictinoary form.  
myCache = {}

# Create a function to calculate a factorial. 
def myCacheFact(n): 
    
    # Recognize myCachee is a global variable. 
    global myCache

    if n in myCache : 
        return myCache[n]
        
    elif n <= 1 :
        return 1
        
    else :    
        myCache[n] = n * myCacheFact(n-1)
        return myCache[n]


# Set a start_not_cacheding timeline. 
start_not_cached = time.time()

# Print the result
print(myCacheFact(7))

# Measure how long it took. 
print(time.time() - start_not_cached)

# Check if the result is stored in myCache dictionary. 
start_cached = time.time()
print(myCacheFact(7))
print(time.time() - start_cached)

print("Preveious calculation is stored in cache: ", myCache[5])