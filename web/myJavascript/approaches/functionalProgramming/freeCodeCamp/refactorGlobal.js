// expected output
// bookList : bookList
// newBookList : bookList + "A Brief ~"
// newerBookList : bookList - "on the ~ "
// newestBookList : bookList - "on the ~ " + "A Brief ~"

// The global variable
const bookList = [
    "The Hound of the Baskervilles", 
    "On The Electrodynamics of Moving Bodies", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae"
];

// Change code below this line
function add (bookList, bookName) {
  let bookList_copied = bookList.slice();
  bookList_copied.push(bookName);
  return bookList_copied;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
  let bookList_copied = bookList.slice();
  const book_index = bookList.indexOf(bookName);

  if (book_index >= 0) {

    bookList_copied.splice(book_index, 1);
    return bookList_copied;

    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

console.group("newBookList");
console.log(newBookList);
console.groupEnd();

console.group("newerBookList");
console.log(newerBookList);
console.groupEnd();

console.group("newestBookList");
console.log(newestBookList);
console.groupEnd();