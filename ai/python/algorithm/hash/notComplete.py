
# Programmars coding test practice 
def solution(participant, completion):
    
    # Sort each list's element in order
    participant.sort()
    completion.sort()

    # Compare each element in loop
    for i in range(len(completion)): 
        if participant[i] != completion[i]:
            return participant[i]
    
    # Print the last element
    answer = participant[-1]
    return answer
