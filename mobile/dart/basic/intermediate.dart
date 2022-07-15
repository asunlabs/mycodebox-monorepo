void checkImport() {
  print("imported");
}

// interface in Dart is done as class.
class ICatInterface {
  late String sound; // null safe
  void catSound() {} // interface does not implement
}

// JakeCat should implement all the requirements from ICatInterface.
class JakeCat implements ICatInterface {
  String sound;
  JakeCat(String sound) : this.sound = sound;

  void catSound() {
    print("Cat sound : ${this.sound}");
  }
}

void createJakeCat() {
  JakeCat jk = new JakeCat("bark!");
  jk.catSound();
}

// cascade operator
class Hedgehog {
  int thornNum = 0;
  String type = "cute";

  // init constructor
  Hedgehog(thornNum, type)
      : this.thornNum = thornNum,
        this.type = type;
  void initHedgeHog() {
    print("number of thorns : ${this.thornNum}, type : ${this.type}");
  }

  void resetHedgehog() {
    this.thornNum = 0;
    this.type = 'none';
    print("reset");
    print("number of thorns : ${this.thornNum}, type : ${this.type}");
  }
}

void doCascade() {
  new Hedgehog(10, "so cute")
  ..initHedgeHog()
  ..resetHedgehog();
}
