// Use mixin to unrelated objects. Use inheritance to related objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
// Only change code below this line

const glideMixin = (obj)=> {
    obj.glide = function(){
        console.log(`${obj.name} is gliding fast`)
    }
}

glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide()
