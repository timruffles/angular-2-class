const language = "typescript";

// `...${ expression }...`
// =  "..." + expression + "..."
//
// `hello ${ product.name }`
// `${ greeting } ${ product.getName() }`
//
// "'" !== "`"
console.log(`hello ${language}! is great`);


const other : number = 5;

let ages = [1,2,3];

const matrix : number[][] = [[1,2,3]];

const callback = (x: string) => x;


function sayHi(name: string) {
  // same as 'hello ' + name;
  console.log(`
    <app>
      <h1>Hello ${ name.toUpperCase() }</h1>
    </app>
  `);

}

sayHi("jscamp");

import { Greeter, name } from "./module";

const greeter = new Greeter("hola");

greeter.greet();
console.log(greeter.greeting, greeter.dontUseMe);
