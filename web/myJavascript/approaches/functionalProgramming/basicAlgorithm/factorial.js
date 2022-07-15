function factorialize(num) {
    let total = 1;
    let buffer = [];
    if (num === 0) { 
        return 1;
    } else {
        for (let i = 1; i < num; i++) {
            let next = num-i;
            console.log(next);
            buffer.push(next);
        }
        for (let key in buffer) {
            num = num * buffer[key];
        }
        console.log(num); 
    }
    return num;
  }
  
  console.log(factorialize(5));