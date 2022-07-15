// write codes
export const randomNumber = (min = 0, max = 100) => {
    console.log(` min : ${min}, max : ${max}`)
    return Math.round(Math.random() * (max-min) * min)
}

console.log(randomNumber(2,10))

