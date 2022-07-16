
# Creating a solution function to solve removing duplicates exercise
# case 1 - one letter duplicated
def solution(): 
    
    # Assume chars is a list of string
    for char in chars : 
        # Compare one element to next element
        if chars[char] == chars[char+1] :
            # Remove a duplcated element 
            chars.pop[char+1]
    return chars

# Time complexitiy ☞ O(n)



# Creating a solution function to solve removing duplicates exercise
# case 2 - several letters duplicated 
def solution2() :
    
    # Randomly decide how many letters duplicated
    k = randrange(0,6)
    count = 0 
    
    for char in chars : 
        if chars[char] == chars[char+1] :
            count += 1 
            
            # if count reaches the limit, do set calculation to remove duplicates
            if count == k :
                return set(chars) - set(chars[char:char+(k-1)])