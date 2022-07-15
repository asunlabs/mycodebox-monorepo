# Leetcode Palindrome number
class Solution: 
    def isPalindrome(self, x: int)-> bool : 
        str_x = str(x)
        str_Tolist = list(str_x)

        for element in str_Tolist :
            last = str_Tolist.pop()
            str_Tolist.append(last)

        join_list = "".join(str_Tolist)
        isPal = int(join_list)

        if x == isPal : 
            return True