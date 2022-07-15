import sqlite3

# In Sqlite, a file becomes a database. In the database, there are tables.
# Create a connenction object to use module sqlite3
conn = sqlite3.connect("./practice.db")

# With statement in Python automatically close a file that is being used after
# everything is done. A file must be closed. 
with conn: 
    # Cursor points a memory address of each row. 
    cur = conn.cursor()

    # Delete a table if it exists. 
    cur.execute("DROP TABLE myPractice")

    # Prepare quries as variables : create, insert, select
    sql = "CREATE TABLE myPractice(date text, name text)"
    add = "INSERT INTO myPractice values(?,?)"
    grabName = "SELECT name FROM myPractice"
    grabDate = "SELECT date FROM myPractice"

    # Create a table
    cur.execute(sql)

    # Insert data
    cur.execute(add, ('7월 27일', '종현'))
    cur.execute(add, ('7월 28일', '태웅'))
    cur.execute(add, ('7월 29일', '정기'))
   
    # Select data: cur.execute(grabName) or cur.execute(grabDate)
    cur.execute(grabName)
    # cur.execute(grabDate)

    # Make a list of each row cursored. 
    rows = cur.fetchall()

    # Loop the cursor to address a repetitive action. 
    for row in rows:
        print(row)
