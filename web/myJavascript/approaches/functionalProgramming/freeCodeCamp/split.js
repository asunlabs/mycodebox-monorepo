function splitify(str) {
    // Only change code below this line
    // Matches any character that is not a word character 
    // from the basic Latin alphabet. e.g : % in 50%
    const regExps = /\W/; 

    const result = str.split(regExps);
    console.log(result);
    return result;
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");
  splitify("Earth-is-our home");
  splitify("This.is.a-sentence");