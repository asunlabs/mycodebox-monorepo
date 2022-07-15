# Python provides 12 built-in data types into four categories
# 1) numerics : int, float, complex, bool
# 2) sequence : str, list, tuple, range
# 3) mapping : dict
# 4) sets

# Pretty much everything in Python is object
# Object consists of : 1) value 2) identity 3) type 
# e.g greet = "hello" -> greet : identity, "hello" : value, type("hello") : type
# The identity of an object acts as a pointer to the object's location in memory
# Once an instance of an object is created, its identity and type cannot be changed.
# The type of an object, also known as the object's class, describes the
# object's internal representation as well as the methods and operations it supports

greet = "hello"
print(id(greet))

# object is either mutable or immutable. if mutable, value can change. if not, cannot.
words = 'here/comes/a/sentence'.split('/')
result = [(word, len(word)) for word in words] # list comprehension
print(result)

x = [1,2,3]
y = ['one', 'two', 'three']

# Zip function in Python returns a zip object, an iterator of tuples
zip_result = zip(x,y) 
print(zip_result)

# Unpacks the zip object and print each element: * -> unpacking operator
q, w, e = zip(x,y)
print(q,w,e)

# print the zip pairs
for i,j in zip(x,y): 
    print(i,j)