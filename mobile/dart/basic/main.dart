import './intermediate.dart';
import 'advanced.dart';

void main() {
  // doOverride();
  // doImport();
  do_fold();
  do_map();
}

void do_map() {
  doMap();
}

void do_fold() {
  doFold();
}

void do_cascade() {
  doCascade();
}

void doInterface() {
  createJakeCat();
}

void doImport() {
  checkImport();
}

class Computer {
  int price = 100;

  void printPrice() {
    print(price);
  }
}

class Laptop extends Computer {
  final int tax = 20; // set only once, immutable

  // overriding method with decorator
  @override
  void printPrice() {
    int result = super.price + tax; // super : parent class
    print("laptop costs : $result");
  }
}

void doOverride() {
  Laptop myLaptop = new Laptop();
  myLaptop.printPrice(); // laptop costs : 100
}

class Animal {
  String type = "animal";

  void walk() {
    print(this.type + " is walking");
  }
}

class Dog extends Animal {
  String legs = "4";

  void checkLegs() {
    print("dog legs : " + this.legs);
    print("type is : ${this.type}"); // this.type equals to super.type here
    print("type is : ${super.type}"); // because of inheritnace
  }
}

void doInheritance() {
  Dog myDog = new Dog();
  myDog.type = "dog"; // define type

  myDog.walk(); // from parent class, result : dog is walking
  myDog.checkLegs(); // from self
}

class MyGtAndSt {
  // _variable : private, only accessible in the same file.
  String _myName = "Jake";

  get getName {
    return this._myName;
  }

  set setName(String newName) {
    this._myName = newName;
  }
}

void doGetterAndSetter() {
  MyGtAndSt jake = new MyGtAndSt();
  print("get prop : " + jake.getName);
  jake.setName = "wow";
  print("set prop : " + jake.getName);
}

class Human {
  String name = "Jake";

  // static variable belongs to only class itself, not class instance
  // useful to set a common attribute in class instance
  static final String className = "Human";

  // default constructor
  Human(name_) {
    this.name = name_;
  }

  void printName() {
    // string interpolation
    print("class name is : $className"); // single variable with no parenthesis
    print("human name is : ${this.name}"); // this keyword with curly braces
  }

  // named constructor( == constructor overloading)
  Human.withoutName();
}

void doClass() {
  // class instance with named constructor
  Human jake = new Human.withoutName();
  jake.printName();

  // checking parent class' static var
  print(Human.className);

  // named constructor
  Human jakeWithDefault = new Human("not jake");
  jakeWithDefault.printName();
}

typedef Operation(int num1, int num2); // saving function signature
void doTypeDef() {
  int add(int x, int y) {
    print(x + y);
    return x + y;
  }

  int substract(int x, int y) {
    print(x - y);
    return x - y;
  }

  Operation op = add;
  op(1, 2); // 3

  op = substract;
  op(1, 2); // -1

  void calculate(int x, int y, Operation op) {
    op(x, y);
  }

  calculate(5, 1, add); // 6
  calculate(5, 1, substract); // 4
}

void doTernary() {
  final myTrue = 2;
  myTrue > 4 ? print("wow") : print("no wow");
}

void doFuture() {
  final myFinal = 3; // final type set only once
  // myFinal = 2; // can't do
  const fixedConstant = 3;
  // fixedConstant = 2; // can't do
  // Future in Dart == Promise in Javascript
  Future.delayed(Duration(seconds: 4), (() => print("hey")));
}

void doList() {
  List myList = []; // dynamic list
  myList.add(1);
  myList.add(2);
  myList.add(3);
  myList.add("hey"); // add list element
  myList.removeAt(2); // delete list element

  for (int i = 0; i < myList.length; i++) {
    print(myList[i]);
  }

  List<String> myStrList = []; // static typed list
  myStrList.add("only");
  myStrList.add("str");
  print(myStrList);

  List<int> myFixedIntList =
      new List.filled(3, 0, growable: false); // fixed size list
  myFixedIntList[0] = 1;
  print(myFixedIntList);

  List<String> myFixedStringList =
      new List.generate(3, ((index) => "hey"), growable: false);
  print(myFixedStringList);
}

void playBasic() {
  print("hello dart");
  var name = "Jake"; // type interence, statically typed
  int myInt = 3;
  double myDouble = 44;
  String myStr = "Sung"; // start with capital letter
  print("$name $myStr"); // Jake Sung , string interpolation
  bool learnDart = true;

  dynamic newName = "not jake";

  newName = 4; // can change to another type

  var dynamicName; // not initialized, infered as dynamic
}
