// Array.reduce : can be applied to most of array problems, converting
// problems to simpler forms(returns a single value)
// Array.map/filter is a speical case of Array.reduce


// Only change code below this line
function urlSlug(title) {
    const seps = new RegExp(/\W/);
    const removeWhiteSpace = new RegExp(/\s+/,'g'); 

    title = title.toLowerCase()
                 .trim() // String.trim removes whitepace from string with no mutation
                 .split(removeWhiteSpace)
                 .join("-");
    console.log(title); 
    return title;
    // return hyphenated string(url), all lowercases

}
// Only change code above this line

urlSlug("Winter Is Coming") // test 1
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") // test 2
urlSlug("Hold The Door") // test 3
urlSlug(" Winter Is  Coming") // test 4