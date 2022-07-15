# In Python, you can use sqlite3 without any installation. 
import sqlite3

# Connect SQLite3 database and read existing DB file.
# If not exists, create a new one.  
conn = sqlite3.connect("myTestDB.db")

# Create a cursor instance to invke SQLite methods: execute(), executemany(), 
# fetchone(), fetchmany(), fetchall()
cur = conn.cursor()

# Create a table myCaffeine if not exists
cur.execute("drop table myCaffeine")
cur.execute('''create table myCaffeine (date text, name text, amount int)''')
# Update myTestDB.db with commit command. 
conn.commit()

cur.execute("insert into myCaffeine values('7월 25일', '종현', 55)")
conn.commit()

# Define a myTeamCaffeine data.
myTeamCaffeine = [ 
    ('July 22nd', 'Jake', 11),
    ('July 23rd', 'Jake2', 22),
    ('July 24th', 'Jake3', 2555),
    ('July 25th', 'Jake4', 33)
]

# Add the data into myCaffeine
cur.executemany("insert into myCaffeine values(?, ?, ?)", myTeamCaffeine)
# Update the change. 
conn.commit()

# Print the whole table. 
cur.execute("select * from myCaffeine")
for row in cur:
    print(row)

# Change caffeine amount of July 23rd, Jonghyun. 
cur.execute("update myCaffeine set amount = 25 where date='7월 23일' and name='종현'")
conn.commit()

# Delete July 25th, Jonghyun's caffeine amount. 
cur.execute("delete from myCaffeine where date='7월 25일' and name='종현'")
conn.commit()

# Check the changes. 
cur.execute("select * from myCaffeine")
for row1 in cur: 
    print(row1)
    
# rows = cur.fetchall()
# print(rows)

# End connection when finished. 
conn.close()