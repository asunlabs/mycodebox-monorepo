# Import abstract class module to create an abstract class
import abc
# import wraps module to use wraps. 
from functools import wraps


# Create an abstract class1 : Customer
class Customer(metaclass = abc.ABCMeta): 
    
    # Create an abstract method
    @abc.abstractmethod
    def SignUp(self): 
        pass

# Create an abstract class2 : CustomerInfo
class CustomerInfo(metaclass = abc.ABCMeta):

    # Create an abstract method
    @abc.abstractmethod
    def Register(self):
        pass


# Create a descriptor class
class KoskDescriptor:
    
#     def __init__(self, infoType): 
#         self.infoType = infoType
    def __set_name__(self, owner, name):
        self.name = "_보호" + name
    
    def __get__(self, instance, owner): 
        print("...팀 Kosk DB에서 데이터를 GET하는 중입니다...")
        return instance.__dict__.get(self.name)
    
    def __set__(self, instance, value):
        print("...팀 Kosk DB에서 데이터를 SET하는 중입니다...")
        instance.__dict__[self.name] = value


# Create a Person class that inherits abstract class Customer
class Person(Customer):
    
    # Create a descriptor object one by one. 
    # Descriptor object should be declared as a class attribute. 
    name = KoskDescriptor()
    age = KoskDescriptor()
    sex = KoskDescriptor()
    
    # class Person's attribute name is delivered to descriptor, using __set_name__.
    # descriptor returns "_보호" + name. 
    def __init__(self, name, age, sex): 
        self.name = name    
        self.age = age 
        self.sex = sex
    
    @property
    def SignUp(self): 
        print(self.name,"님이 가입하셨습니다.")


# Create a decorator to add functions without editing previous codes.
# It would have been better for the functions to be split each other, 
# not the way it is described below. 
# Here, we proceed it this way since its purpose is to demonstrate 
# a basic approach to understand OOP. 
def KoskDecorator(KoskFunc): 
    @wraps(KoskFunc)
    def inner(*args, **kwargs):
        def Send():
            print("정보를 SEND하는 중입니다.")
        def Confirm(): 
            print("정보를 CONFIRM하는 중입니다.")
        def Verify(): 
            print("정보를 VERIFY하는 중입니다.")
        def Authenticate():
            print("정보를 AUTHENTICATE하는 중입니다.")
        KoskFunc(*args, **kwargs)
        Send()
        Confirm()
        Verify()
        Authenticate()
#         return KoskFunc(*args, **kwargs)
    return inner
        

# Create Iris class that inherits abstract class CustomerInfo
class Iris(CustomerInfo):
    irisColor = KoskDescriptor()
    def __init__(self, irisColor): 
        self.irisColor = irisColor
    
    @property
    @KoskDecorator
    def Register(self): 
        print("홍채 정보를 등록 중입니다: ", self.irisColor)

# Create License class that inherits abstract class CustomerInfo
class License(CustomerInfo):
    date = KoskDescriptor()
    def __init__(self, date): 
        self.date = date
        
    @property
    @KoskDecorator
    def Register(self): 
        print("면허 정보를 등록 중입니다: ", self.date)

# Create Pin class that inherits abstract class CustomerInfo
class Pin(CustomerInfo):
    pin = KoskDescriptor()
    def __init__(self, pin): 
        self.pin = pin
        
    @property
    @KoskDecorator
    def Register(self): 
        print("핀 정보를 등록 중입니다: ", self.pin)


# Create a customer object. 
userA = Person("종현", 27, "남성")

userA.SignUp
userA.name
userA.age
userA.sex

# Check namespace of userA to check if the descriptor __set_name__ method works. 
# userA.__dict__ : "_보호name"
userA.__dict__ 

# Create a Iris object
userIris = Iris("갈색")
userIris.Register

# Create a License object
userLicense = License(20210717)
userLicense.Register

# Create a Pin object
userPin = Pin(123456789)
userPin.Register

# Check the namespace of each object.
userIris.__dict__
userLicense.__dict__
userPin.__dict__