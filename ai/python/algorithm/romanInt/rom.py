class solution :
    def romanToInt(self, s:str) -> int :
        myDict = {
            'I':1, 
            'V':5,
            'X':10, 
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }

        s_list = list(s)
        for rom, val in enumerate(myDict): 
            if s_list[0] == rom and : 
