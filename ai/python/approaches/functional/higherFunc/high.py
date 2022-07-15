
# Higher order function in Python: functions taking other funcs are called higher order functions

# map function in Python : map(myFunc : func, myIter : iterable) -> map : 
# map usage : to process and transform all the items in an iterable <<without using an explicit for loop>>
# convert return value(map object) into list or tuple 

lst = [1,2,3,4]

# convert map into list
print(list(map(lambda x: x*2, lst)))

# convert map into tuple 
print(tuple(map(lambda x : x^2, lst)))

words = str.split('The longest word in this sentence')
nums = [1,44,5,73,26,4]
print(words)

# Return a new list containing all items from the iterable in ascending order.
# A custom key function can be supplied to customize the sort order, 
# and the reverse flag can be set to request the result in descending order.
# sorted(iterable, key, reverse)
words_sorted = sorted(words, key=len, reverse=True)
print(words_sorted)

# Important convention in Python - function/method changing the object return None value
# Sort the list in ascending order and return None.
# If a key function is given, apply it once to each list item and sort them, 
# ascending or descending, according to their function values.
# The reverse flag can be set to sort in descending order.
words_sort = words.sort()
print(words_sort) # print None 
print(words) # original object changed by sort()

sorted(nums, reverse=True)
sorted(nums, reverse=False)