
# In general, Python opens and closes a file using open(), close() function.
# A file must be closed since other program can't access to the file 
# if it is not closed. When error happens, the file can't be closed.
# Use try - except - finally statement or with - as statement to close the file
# without error occuring. 

# mode: 'r' - open for reading, 'x' - open for creating and writing a new file, 
# 'w' - open for writing(truncating existing file first.)
with open("./myPython.txt", 'r', encoding="utf8") as myPy :
    myPy.write("Practice with ~ as statement in Python")
    myPy.write("\nEnd of txt file.")
    
    # Keep the first 7 characters of the txt file == Cut out the rest of it.
    myPy.truncate(7)

    # Set the cursor location. 
    # myPy.seek(5)
    
    # readline function works in 'r' mode.
    # myLine = myPy.readline()
    # print(myLine)