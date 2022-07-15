function reverseString(str) {
    let tray = []; 
    for (let character in str) {
        tray.unshift(str[character]);
    }
    console.log(tray);
    str = tray.join("");
    return str;
  }
  
  console.log(reverseString("hello"));