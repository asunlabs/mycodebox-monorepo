# All data types in Python are objects: module, class, function
# string, integers... etc.  And each object has a type, a value, and an identity

a = 4 

print(a) # value of a
print(type(a)) # type of a
print(id(a)) # identity of a

# All sequence types support index and slicing
greet = 'hello world'

# Extended slice by using a stride
print(greet[0:7:3])

print(greet[0::2])

# Index can be expression, variable, or operator
print(greet[len(greet)-1])
print(greet[3-2])

# Variable greet is immutable. Directly adding/editing is not possible
newGreet = greet[:5] + ' beautiful' + greet[5:] # Concatenation
print(newGreet)

# dynamic type during runtime
x = 'one'

if x == 0 : 
    print('False')
elif x == 1 : 
    print('True')
else : 
    print('Something else')

