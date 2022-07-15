class Solution : 
    def longestCommonPrefix(self, strs:List[str]) -> str : 
        # convert each string element into list 
        for idx, val in enumerate(strs) : 
            strs[idx] = list(val)

        # now strs is 2d array 
        for i in strs :
            for j in strs[i] : 
                if strs[i][j] == strs[i+1][j] and i+1 < len(strs) -1 :
                    # lost from here.. 