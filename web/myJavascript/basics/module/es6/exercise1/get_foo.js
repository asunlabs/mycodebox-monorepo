// All imports must be in root level. 

notGreeting("jake")
greeting("wow")


// All imports being hoisted, meaning moving to the top regardless of where they were written.
import { greeting, notGreeting } from './foo.js'