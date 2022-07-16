# Variable arguments in function
def myArgs(*args, **kwargs): 
    print(args, kwargs)
    result = list(args) + list(kwargs)
    print(result)

myArgs(2,3,"hello", a=6, b=4)
myArgs("this is", [1,2,3], myNum=777, yourNum=666)


# Variable arguments in class
class Car:
    def __init__(self):
        print("car manufacturing completed")

c1 = Car()

class MyFunc: 
    def __call__(self, *args, **kwargs):
        print("I'm called")


f = MyFunc()

# () -> call  __call__ method that is in class MyFunc
f()


def myFunc(number):
    # A parameter of function is a local variable of the function. 
    print(locals())
    return number

myFunc(8)

print(myFunc(5))

type(myFunc)

# function name is an identifier. function name is managed in namespace.
# function in Python is an object.
myFunc

myVar = 100 

# Variable is not callable. 
callable(myVar)

# Function is callable.
callable(myFunc)

# data type of callable is: class 
type(callable)

# Python is Object-oriented programming. Everything in Python is an object.
# Method deals with all the operators in Python. 
# __call__ is function call method. 
myFunc.__call__(8)

globals()['myFunc'](12345)

myFunc(9)

yourFunc = myFunc 
type(yourFunc)

yourFunc = 888
type(yourFunc)

print(yourFunc, myFunc)

def func_(para1 : int, para2: int):
    x = 100 
    print("지역변수", locals())
func_(100,200)

func_.__annotations__

# docstring is used to describe how a function is structured. 
# Use eithr (function).__doc__ or help(function name)
int.__doc__
help(int)