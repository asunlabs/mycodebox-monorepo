'''
Use facade pattern to combine Typewriter APIs that are in different languages.
Character list: 
1) 일 :  #1 in Korean
2) 一 : #1 in Chinese
3) いち : #1 in Japanese

'''
class TypewriterKOR :
    @staticmethod # staticmethod does not have a self argument.
    def write() : # classmethod takes a cls argument, which points to a current class
        return "일"

class TypewriterJPN :
    @staticmethod
    def write() : 
        return "いち"
    
class TypewriterCHN :
    @staticmethod
    def write() : 
        return "一"

class Facade : 
    def __init__(self) :
        self.korText = TypewriterKOR()
        self.jpnText = TypewriterJPN()
        self.chnText = TypewriterCHN()
    def write(self) : 
        result = self.korText.write()
        result += self.jpnText.write()
        result += self.chnText.write()
        return result

myFacade = Facade()
result = myFacade.write()
print(result)


print("////////////////////")
result = TypewriterKOR.write()
print("staticmethod called : ",result)