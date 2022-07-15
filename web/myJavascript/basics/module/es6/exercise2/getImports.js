// import default class : User => can change name to anything. e.g import Wow from './app.js'
import User from "./user.js"; // don't forget to clarify .js at the end

// import non-default functions : { printName, printAge } => requires curly brackets
import { printName as printUserName, printAge as printUserAge } from "./user.js";

const user = new User("jake", 27)
printUserName(user)
printUserAge(user)

console.log(user)