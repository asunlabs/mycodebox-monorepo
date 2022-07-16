# Command design pattern
# capsulate and abstractize a command
class Command : 
    def execute() : 
        pass 

class GreetingCommand(Command) :
    def __init__(self, cmd) : # __init__ : constructor in Python
        self.cmd = cmd
    def execute(self) : 
        print(self.cmd)

class SingCommand(Command) : 
    def __init__(self, cmd) :
        self.cmd = cmd
    def execute(self) : 
        if (self.cmd == "Beyonce") : 
            print("Start song : Beyonce - Listen")
        else : 
            print("Only Beyonce available for now")
        
firstCommand = GreetingCommand("Hello World")
secondCommand = SingCommand("Beyonce")
thirdCommand = SingCommand("50 Cent")
fourthCommand = GreetingCommand("Goodbye World")
# firstCommand.execute()

# Invoker : store commands and trigger all commands.
class Invoker :
    def __init__(self) : 
        self.commands = []
    def addCommand(self, command) : 
        self.commands.append(command)
    def runCommands(self) :
        for command in self.commands : 
            command.execute()

invoker = Invoker()
invoker.addCommand(firstCommand)
invoker.addCommand(secondCommand)
invoker.addCommand(thirdCommand)
invoker.addCommand(fourthCommand)
invoker.runCommands()
 