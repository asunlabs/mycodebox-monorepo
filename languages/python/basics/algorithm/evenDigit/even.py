
# Not solved yet
def solution(nums : List[int]) -> int : 
    digit_count, num_count = 0

    for i in nums : 
        while (i != 0) : 
            i //= 10 
            digit_count += 1
        isEven = digit_count

        if isEven % 2 == 0 : 
            num_count += 1
    return num_count
    