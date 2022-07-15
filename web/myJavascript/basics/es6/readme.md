# Learning ES6 essentials
Most of browsers follows ECMAscript(ES), which is a Javascript standard. The language evolves as time passes, releasing new features. ES5 was finalized in 2009 and ES6 released in 2015.

## Basics
### Static module structure
> ECMAScript 6 modules are less flexible and force you to be static. Benefits of the static module structures are as follows : 

1. dead code elimination during bundling
2. compact bundling, no custom bundle format 
3. faster lookup of imports 
4. variable checking

> Current JavaScript module formats have a dynamic structure: What is imported and exported can change at runtime. One reason why ES6 introduced its own module format is to enable a static structure, which has several benefits. But before we go into those, let’s examine what the structure being static means.

> It means that you can determine imports and exports at compile time (statically) – you only need to look at the source code, you don’t have to execute it. ES6 enforces this syntactically: You can only import and export at the top level (never nested inside a conditional statement). And import and export statements have no dynamic parts (no variables etc. are allowed).

## Reference
- [Free Code Camp : ES6](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6)