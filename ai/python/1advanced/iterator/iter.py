
# iterator is an object that takes element out.
# In Python, iterator is generated before value(data) assignment in memory.
# Data is assigned when needed. This is called lazy evaluation. 

# dir is a builtin function that elaborates what kind of variable
# and method an object holds.
# Find __iter__ method : if it exists, the object is iterable. 
dir([1,2,3])

# Find __iter__method : if it exists, the object is iterable.
dir(range(1,5))

# Find __iter__method : if it exists, the object is iterable. 
dir({1 : "hi", 2 : "bye"})

# Create an iterator object, using __iter__ method. 
myList = [1,2,3].__iter__()

# __next__ method takes an element out.
myList.__next__()
myList.__next__() 
myList.__next__()
#myList.__next__() # StopIteration error occurs.


# Iterator class : (1) __iter__ (2) __next__ 
class myIterator : 
    def __init__(self, start, stop): 
        self.start = start
        self.stop = stop
    
    # Creat an iterator object. 
    # __iter__ method is what makes myList iterable.
    def __iter__(self) :
        return self 
    
    # Take one element out one by one.
    def __next__(self):
        if self.start < self.stop : 
            r = self.start
            self.start += 1
            return "__next__ called", r
        else : 
            raise StopIteration

# Repeat as much as __next__ can repeat.
for i in myIterator(0,5) : 
    print("myIterator working: ", i)
        