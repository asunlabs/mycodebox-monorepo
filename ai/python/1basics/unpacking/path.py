

line = 'jake:*:-2:-4:great user:/var/empty:/usr/bin/false'
part1, *part2, part3, part4 = line.split('/')
print(part2)
print(part3)
print(part4)