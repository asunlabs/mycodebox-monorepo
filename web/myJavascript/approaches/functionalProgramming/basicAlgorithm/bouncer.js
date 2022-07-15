
// Falsy value in Javascript : a value that is considered false 
// when encountered in a Boolean context.
// [false, null, 0, "", undefined, NaN]. All the other values are considered truthy.
function bouncer(arr) {

    arr = arr.filter(Boolean); 
    console.log(arr);
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer(["a", "b", "c"]);
  bouncer([false, null, 0, NaN, undefined, ""]);
  bouncer([null, NaN, 1, 2, undefined])

//  Why my trial failed : didn't know that NaN !== NaN in javascript
// const falsy = [false, null, 0, "", undefined, NaN];  
// for (let key in falsy) {
//     for (let i = 0; i < arr.length; i++) {
//         if (falsy[key] === arr[i] || typeof(arr[i])===NaN) {
//             arr.splice(i,1); 
//         }
//     }
// }
// console.log(NaN===NaN);