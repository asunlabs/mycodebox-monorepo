const grabH1 = document.querySelector("h1"); 

const typingText = "this is a paragraph";
const speed = 150;
let position = 0;

function initTypewriter() {    
    // string.charAt() : Returns the character at the specified index.
    
    if (position < typingText.length) {
        grabH1.innerHTML = grabH1.innerHTML + typingText.charAt(position);
        position++;
        setTimeout(initTypewriter, speed);
        
    } else {
        // position--;
        grabH1.innerHTML = grabH1.innerHTML.slice(0,grabH1.innerHTML.length-1);
        setTimeout(initTypewriter, speed);
        position++;
        // initTypewriter();
    }
}

initTypewriter();