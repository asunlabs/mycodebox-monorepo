// Every browser has a built-in that gets user's current location 

if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition((position)=>{
        document.getElementById("data").innerHTML = `
                                                    <div id="data">latitude: ${position.coords.latitude}
                                                    longitude : ${position.coords.longitude}</div>
                                                    `
    })
}