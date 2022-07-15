// rest parameter takes the infinite numbers of arguments
const sum = (...myArgs) => {
    // const args = [x, y, z];
    return myArgs.reduce((a, b) => a + b, 0);
  }

  console.log(sum(0,1,2))
  console.log(sum(1,2,3,4))
  console.log(sum(5))