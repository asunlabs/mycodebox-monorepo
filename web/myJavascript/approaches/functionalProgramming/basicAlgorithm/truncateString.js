function truncateString(str, num) {
    let bowl = new Array();

    if (str.length > num) {
        str = str.split("");
        for (let i=0; i < num; i++) {
            bowl.push(str[i]);
        }
        str = bowl.join("") + "...";
    } else {
        console.log("when num > str.length : ",str);
        return str
    }

    console.log("when str.length > num : ",str);
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8); // test 1
  truncateString("Peter Piper picked a peck of pickled peppers", 11); // test 2
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // test 3
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // test 4
  truncateString("A-", 1); // test 5