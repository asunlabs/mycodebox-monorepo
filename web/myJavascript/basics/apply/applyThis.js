// create a function that calculate each subject average score

math = {"smith":75, "nana": 40, "jake":100};
english = {"smith":24, "nana": 90, "jake":60};

function calAvg() {
    let total = 0;
    // this keyword in javascript points to the object it belongs to
    for (key in this) {
        total += this[key];
    }
    let avg = total/Object.keys(this).length;
    console.log(avg);
    return avg;
}

calAvg.apply(math); // apply calAvg function to math object 
calAvg.apply(english); // apply calAvg function to english object

