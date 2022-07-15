import time

singleton = "world" # string object

def helloWorld() :
    # singleton object is shared in fuction hello world object
    print("hello " + singleton) 

def goodbyeWorld() :
    # singleton object is shared in fuction goodbye world object
    print("goodbye " + singleton) 

helloWorld()
goodbyeWorld()


time.sleep(3)
print("Module is a singleton instance.")