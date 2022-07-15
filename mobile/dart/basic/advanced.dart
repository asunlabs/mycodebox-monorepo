void doReduce() {}

List<int> nums = new List.generate(5, ((index) => index + 1));

void doFold() {
  final mappedNums = nums.map((item) => {if (item % 2 == 0) item});
  print("mapped list : ${mappedNums.toList()}");

  // Reduces a collection to a single value by iteratively
  // combining each element of the collection with an existing value
  // returns generic.
  final int total = nums.fold(0, (prev, elem) => prev + elem);
  print("total value with fold is : ${total}");

  final String totalLength = nums.fold(
      '', (previousValue, element) => (previousValue + element.toString()));
  print("total length with fold is : ${totalLength.length}");

  // same with the fold except that reduce takes only one argument
  // returns int.
  final int totalByReduce = nums.reduce((value, element) => value + element);
  print("total value with reduce is : ${totalByReduce}");
}

void doMap() {
  Map myMap = {
    'apple': 1,
    'banana': 2,
    'orange': 3,
  };

  print(myMap.keys.toList());

  // Map.entries iterates key/value pair, useful to get index/value together
  // e.g. entry => (key, value)
  final newMap = myMap.entries.map((entry) {
    final key = entry.key;
    final value = entry.value;

    return "${key}, ${value}";
  });

  print(newMap.toList());

  final myList = [
    "one",
    "two",
    "three",
  ];
  final newMapWithAsMap = myList.asMap();

  final result = newMapWithAsMap.entries.map((e) {
    final key = e.key;
    final val = e.value;
    return "${key} : ${val}";
  });
  print(result);
}
