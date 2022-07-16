import types

myVar = 10

print(globals()['myVar'])

print(type(myVar))

sum([1,2,3,4])

print(sum, type(sum))

result = type(sum) == types.BuiltinMethodType
print(result)

class A: 
    def method(self):
        pass

print(type(A().method) == types.MethodType)