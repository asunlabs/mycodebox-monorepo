// catch method is fired when Promise is rejected

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received").catch((error)=>console.log(error));
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });