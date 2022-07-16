class Stock:
    def __getattribute__(self, item):
        print("You have approached to:",item, "object")

s = Stock()

# myItem is delivered to magic method __getattribute__ 
# as an item parameter.
s.myItem
s.wow
s.newlyCreatedAttr