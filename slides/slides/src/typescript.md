## TypeScript
{title:1}

## ES6++

![typescript es6](img/typescript-es6.png)

## Lots of features

## Most important

1. Types
1. Modules
1. Classes

## Types
{title:1}

## Types

```typescript
const person : string = "hello";

function greet(name: string): string {
  return \`hi ${name}\`;
}

// this will compile
console.log(greet("hi"));

//  Argument of type 'number' is not assignable 
// to parameter of type 'string'.
console.log(greet(1));
```

## Woah!

## Bit by bit

## Variables

```typescript
// type a var, let, const
const person : string = "hello";
```

## Functions

```typescript
// type arguments, return values
function greet(name: string): string {
  // ...
}
```

## Compiled code is nice

```javascript
var person = "hello";
function greet(who) {
    return "hi " + who;
}
// this will compile
console.log(greet("hi"));
```

## Exercise
{exercise:1}

    EXERCISES.md - typescript-vars

## Modules
{title:1}

## Uses ES6 modules!

## Export

```typescript
// greetings.en.ts
export const informal = "hi";
```

## Import

```typescript
// run.js
import { informal } from "./greetings.en";

console.log(informal + " amy") // hi amy
```

## Together

```typescript
// greetings.en.ts
export const informal = "hi";
export function useful() {}
```

```typescript
// run.js
import { informal, useful } from "./greetings.en";

console.log(informal + " amy") // hi amy
```


## Exercise
{exercise:1}

    EXERCISES.md - import-export


## Classes
{title: 1}

## ES6++
## Properties

```typescript
export class Heading {
  level: number;
  text: string = "default";
}

const header = new Heading();
header.text // "default"
```

## Properties in constructor

```typescript
export class Heading {
  constructor(public level: number, 
    public text: string) {
  }
}

const header = new Heading(2, "hello");
header.level // 2
header.text // "hello";
```

## Methods

```typescript
export class MarkdownHeading {
  //...

  render() {
    return \`<h${this.level}>
      this.text
    </h${this.level}>\`;
  }
}

const header = new Heading(2, "hello");
console.log(header.render()) // "<h2>hello</h2>"
```

## Exercise
{exercise:1}

    EXERCISES.md - classes

## Loading TypeScript
{title: 1}

## Not native

## Modules not native

- stuck in browser vendor disputes

## Polyfill to the rescue!

```javascript
System.import('app/main')
.catch((e) => console.error(e.stack))
```

## Config

## Your code

```javascript
System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
  },
});
```

## External modules

```typescript
// importing from node_modules
import d3 from "d3":

// powered by...
```

```javascript
// this config
System.config({
  map: {
    d3: "node_modules/d3/d3.js",
  },
  meta: {
    "node_modules/*": {
      defaultExtension: 'js',
      format: "cjs"
    }
  },
});
```
