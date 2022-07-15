// closer is an advanced techniuqe used to approach that 
// inner function accesses to outer funciton context. Accessible
// even when the outer function ends. 

function outer() {
    let topic = "javascript closer"; 

    function inner() {
        console.log(`Study ${topic}`);
    }
    inner(); 
}

// delay execution of outer function
setTimeout(outer, 3000);

// inner func can access to outer func local variable even when 
// the outer func has ended.
function outer_second() {
    let topic_second = "JS closer";
    
    return function() {
        return topic_second; 
    }
}

const outer_second_result = outer_second();
console.log(outer_second_result()); // result : JS closer

