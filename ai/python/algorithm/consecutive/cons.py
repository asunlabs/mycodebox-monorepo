
def solution(nums : List[int]) -> int: 
    count, myMax = 0

    for i in nums : 
        if i == 1 : 
            count += 1
        else : 
            count = 0
        myMax = max(count, myMax)
    return myMax

