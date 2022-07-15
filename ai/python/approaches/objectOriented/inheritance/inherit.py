

from functools import reduce

# Create a parent class
class GoBlock : 
    
    # Initialization
    def __init__(self): 
        self.date = "2021년 5월 17일"
        self.learn = "go and python"

    def Hackathon(self, isDone):
        return bool(1) if isDone == "A" else False
            
    def Project(self, isDifficult):
        return bool(0) if isDifficult < 5 else True

    def demoDay(self):
        return "Coming soon"

    
# Inheritance - Create child classes: group A, group B
class MyClass(GoBlock) : 

    # initialization
    def __init__(self, where): 
        self.where = where

    # Student enrollment method
    def enroll(self, **kwargs): 
        self.nameList = kwargs.keys()
        self.ageList = kwargs.values()
        self.ageSum = reduce(lambda x,y : x+y, self.ageList)
        return self.nameList, self.ageList, self.ageSum

    # Student disenrollment method
    def disEnroll(self, *args): 
        self.whoLeft = [name for name in args]
        return self.whoLeft


# Create an object. 
classA = MyClass("Where : Room #301")

# Print the object's attribute. 
print(classA.where)

# Enroll students. 
print("Enrolled students, age, sum of the age", classA.enroll(jonghyun1=27, jonghyun2=29, jonghyun3=31))

# Disenroll students. 
print("Who disenrolled?: ", classA.disEnroll("jonghyun2"))

# Approach to parent class methods. 
# Check if hackathon of each class is done. 
print("Did class A finish hackathon?", classA.Hackathon("A"))
print("Did class B finish hackathon?", classA.Hackathon("B"))

# Check if project is difficult. 
print("Is goBlock project difficult?", classA.Project(6))

# Check when Demo Day is. 
print("When is Demo Day?", classA.demoDay())
print()