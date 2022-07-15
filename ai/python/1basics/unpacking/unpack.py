# pack : unify elements into one object 
# unpack : separate one object into elements

# Unpacking works well with any object that is iterable, not just tuple and list.
greeting = 'sayhi'
a,b,c,d,e = greeting

# Python has no syntax ignoring value like Go's blank identifier : _
# In Python, it will just return the value assigned. 
numbers = [1,2,3,4,5]
_, two, three, four, five = numbers
print(_, _)

# Suppose getting an average score of 27 subjects, excluding the first and last ones.
def drop_first_last(grades): 
    first, *middle, last = grades
    return avg(middle)

record = ('jake', 'jake@example.com', '111-222-3333', '222-333-4444')
# unpacking two values into one variable phones
name, email, *phones = record

print("Name: ", name)
print("Email: ", email)
print("Phones: ", phones, "its type: ", type(phones))

# Assume that summer goes from May to August
spring, *summer, autumn = [4,5,6,7,8,9]
print(sum(summer)/len(summer))

# Unpacking elemetns from iterables
*last_4_month_revenue, this_month_revenue = [10,20,15,40,50]

# Get average revenue of previous four months : result1
result1 = sum(last_4_month_revenue)/len(last_4_month_revenue)
result2 = this_month_revenue

# Check if this month revenue exceeds average revenue of last four months
print(result1 < result2)

# Incentivise employees
print("Great performance!")

# Unpacking 2D list as well.
*myUnpackingList, myInt = ([1,2,3], ['a','b', 'c'], [["I am", "first","2D"],["I am", "second", "2D"]], 9999) 
print(myUnpackingList, myInt)

# Can't unpack keyword argument outside of function
# **myKeyWordUnpacking, myFloat = ({1:"hello", 2:"good bye"}, 66.66)

# Playing around with unpacking
p = (4,5)
x, y = p

data = ['jake', 27, 95.2, (2021, 8, 10)]

name, age, birthday, date = data

bowl =[name, age, birthday, date]

for spoon in bowl :
    print(spoon)

# unpacking example in function
def getSum(a,b,c) :
    return a + b + c

# the number of unpakced element should be the same with the number of parameters in function
print("result is : ", getSum(*[1,2,3])) 
