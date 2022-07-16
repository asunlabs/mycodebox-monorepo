iamGlobal = "Hi, I'm a global variable. I'm in module!"

# Create a function with variable argument and keyword argument.
def thisFunc(*args): 
    print("thisFunc executed.")
    print(iamGlobal)

    iamNonLocal = "Hello I'm a nonlocal variable. I'm in function thisFunc!"

    def thatFunc(*args):
        paras = [ ]

        print("thatFunc executed.")
        print(iamNonLocal)
        print("You have entered: ",args, "as parameters.")

        for i in args:
            paras.insert(0,i)
        
        return yourParas(paras)

    def yourParas(paras): 
        print("Inverse your parameters: ",paras)

    return thatFunc(*args)

thisFunc(1,2,3)

