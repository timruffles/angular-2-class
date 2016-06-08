## TypeScript

## How-to

All TypeScript work should be written in `/app/typescript-exercise`.

Run `npm run exercise` to start an interactive session. Each change you make to a TypeScript file will recompile your code and run the `exercise` module.

Write lots of `console.log()`s messages to yourself to test your understanding.

## Steps

### Experiment with vars

1. typescript-vars 
	1. in: app/typescript-exercises/exercise.ts
	1. define a const as a number, and assign it a string literal. What happens?
	1. define a const as an array of numbers, and assign it an empty array
		1. then assign it an array of strings
	1. define an object type with some properties. Create some vars with that type. Try and trick the compiler
	1. define some functions with:
		1. typed params
		1. typed return types


### Understand importing and exporting

1. import-export
	1. in: exercises/typescript.ts and exercise/module.ts
	1. import `Greeter` from module - what compiler errors do you get?
	1. define a `Greeter` class in module.ts
	1. try out a few more import/exports


### Defining classes

1. classes
	1. in: exercises/typescript.ts and exercise/module.ts
	1. in module.ts, define a Header class, with 2 public properties
	1. import into typescript.ts, and create an instance
	1. how does the type checking feel? is it good at inferring things?
	1. define some private properties, and try to access them elsewhere
