// Promise is useful when something takes an unknown time to do.
// then method is fired when the Promise is fulfilled
// then methods takes an argument from resolve function

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data").then((result)=>console.log(result));
    } else {  
      reject("Data not received");
    }
  });