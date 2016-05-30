

import { someFunction } from "./module";


console.log("compiled code ran OK");

someFunction();

import { Header } from "./module";

const header = new Header(
  "hello",
  1,
  "HTML"
);

console.log(header);

console.log(header.style);

const names : string[] = ["hi"];
const pair : [number, number ] = [1,1];

type Person = {
  wealth?: number,
  name?: string
};

const person : Person = {};

class PersonC {
  first: string;
  middle: string;
  last: string;

  constructor({first, middle = "N/A", last} : {
    first: string,
    middle?: string,
    last: string,
  }) {
    this.first = first;
    this.middle = middle;
    this.last = last;
  }

  greet(greeting: string): void {
    console.log(greeting + " " + this.first);
  }
}

class PersonV2 {
  constructor(
    public first: string,
    public middle: string,
    public last: string
  ) {
  }
}

const a = new PersonC({
  first: "tim",
  last: "ruffles",
});

console.log(a.first, a.middle, a.last);

const b = new PersonV2(
  "bob",
  "'the rocket'",
  "johnson"
)

console.log(b.first, b.middle, b.last);


{
  let a = "1";
  let b = "2";

  [b,a] = [a,b];
  console.log(a,b);
}

import * as B from "./moduleB";

console.log(B.A, B.B);


console.log("\n\n\n\n lots of newlines");
