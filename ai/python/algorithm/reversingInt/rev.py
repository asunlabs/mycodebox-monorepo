class Solution:
    def reverse(self, x: int) -> int:
        str_x = str(x)
        list_x = list(str_x)

        for i in list_x : 
            if i == "-" : 
                pass 
            last = list_x.pop()
            list_x.append(last)
            
        list_x_join = "".join(list_x)
        list_x_join_int = int(list_x_join)
        return list_x_join_int