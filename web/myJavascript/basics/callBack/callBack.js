// reference : https://www.youtube.com/watch?v=-iZlNnTGotk
// callback function : a function used as a parameter. Used when 
// codes need to be in order => e.g addEventListener, database
const displaySecond = document.querySelector(".second");;

function consoleTime() {
    const today = new Date(); 
    const myTime = today.getSeconds();
    const msg = "displaying second in JS: "
    console.log(myTime);
    displaySecond.innerHTML = `${msg}${myTime}`;
}

// consoleTime function is a callback function of setInterval. 
setInterval(consoleTime, 1000);