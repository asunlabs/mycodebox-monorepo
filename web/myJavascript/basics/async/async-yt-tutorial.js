// countdown function using callback : Christmas tree pattern
// setTimeout(()=>{
//     console.log("count down : 3");
//     setTimeout(()=>{
//         console.log("count down : 2");
//         setTimeout(()=>{
//             console.log("count down: 1"); 
//         }, 1000);
//     }, 1000);
// }, 0)


function countdown() {
    let count = 5
    console.log(`your game will start in ${count} seconds.`)
    return {
        get_countdown:setInterval( ()=> { 
            if (count > 0) {
                console.log(`countdown : ${count}`);
                count--;
            } else { 
                console.log("game start");
                throw "exit";
            }
        }, 1000)
    }
};

const initCountdown = countdown();
initCountdown.get_countdown;
