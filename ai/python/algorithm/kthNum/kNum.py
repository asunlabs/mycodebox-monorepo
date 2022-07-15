def solution(array, commands):
    answer = []
    mySlice = []
    for i in range (len(commands)) : 
        # Slicing the array
        mySlice = array[commands[i][0]-1:commands[i][1]]
        
        # Sort the array
        mySlice.sort()
    
        # Print the result
        answer.append(mySlice[commands[i][2]-1])
    return answer
