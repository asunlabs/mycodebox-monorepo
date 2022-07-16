# Learning Python Essentials

Learn Python. Life is short, so is Python.

## Basics

### Magic method

> Magic methods in Python are the special methods that **start and end with the double underscores**.
> Magic methods are not meant to be invoked directly by you, but **the invocation happens internally from the class on a certain action**. For example, when you add two numbers using the + operator, internally, the **add**() method will be called.

> **new**() method
> Languages such as Java and C# use the new operator to create a new instance of a class. In Python the **new**() magic method is implicitly called before the **init**() method. The **new**() method returns a new object, which is then initialized by **init**().

> Magic methods are most frequently **used to define overloaded behaviours of predefined operators** in Python. For instance, arithmetic operators by default operate upon numeric operands. This means that numeric objects must be used along with operators like +, -, \*, /, etc. The + operator is also defined as a concatenation operator in string, list and tuple classes. We can say that the + operator is overloaded.

## Reference

- [Python - Magic or Dunder Methods](https://www.tutorialsteacher.com/python/magic-methods-in-python)
