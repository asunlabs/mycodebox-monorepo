// Promise status : 1) pending 2) fulfilled 3) rejected
// Promise((resolve, reject)=> { // do something here })

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });