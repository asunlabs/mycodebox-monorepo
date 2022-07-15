const testing = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }

  function countOnline(usersObj) {
      let count = 0; // let is block scope( {} )
      for (let keys in usersObj) {
          // below, usersObj.keys.online === true won't work. 
          if (usersObj[keys].online === true) {
            count++;
          }
      }
      return count;
  }

  console.log(countOnline(testing)); 
//   console.log(testing.Alan.online); 