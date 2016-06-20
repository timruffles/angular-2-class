// can't use before defined
// console.log(language);

let language = "typescript";

{
  let language = "something else";
  console.log(`inside block ${language}`);
}

console.log(`outside block ${language}`);
console.log(`hello ${language}`);


let languages : Array<number> = [1,2,3];


let m = new Map<number, string>();

type userId = number;

type formUserValue = {
  id: userId,
  userName: string,
  age: number
  isAdmin?: boolean,
}

class UserStruct {
  constructor(
    public name: string,
    public age: number
  ) {}

  toString() {
    return `User<${this.name}-${this.age}>`
  }

  getUser() {
    const self = this;
    this.userStore.get((user: User): void => {
      this.userStore.save((user) => {
        console.log(this === self);
      })
    })
  }

  static fromForm({
    userName: name, age,
    isAdmin = false
  } : formUserValue) {
    return new UserStruct(name, age);
  }
}

const user = new UserStruct("bob", 15);
const user2 = new UserStruct("amy", 25);
console.log(user + "");


type userStruct = { name: string, age?: number };

const user3 : userStruct = { name: "harry" };


function debounce(fn, n) {

  return function(...args) {
    // ["hi", "there"]

    fn(...args); // fn(args[0], args[1], ... args[n])
    
  }
  
}

const debouncedLogger = debounce((m,m2) => console.log(m, m2), 100);

debouncedLogger("hi", "there");


const runners = ["bolt", "some other guy", "another", "mo farrow"];
const [winner, silver, bronze, ...losers ]  = runners;


const { name: userAName = "unnamed runner" } = user3;


@myLovelyDecorator({
})
export class Foo {
  @otherDecorator() someProperty: someType;

  constructor( arg1) {
  }

  @memoize
  method() {
  }
}



function myLovelyDecorator(annotations) {
  return function(thingToDecorate) {
    
  }
}

function memoize(thingToDecorate) {
  
}


const squares = [1,2,3,4].map(a => a * a)
const squares2 = [1,2,3,4].map((a, i) => a * a)
const squares3 = [1,2,3,4].map((a, i) => {
  console.log("hoo");
  return a * a;
})




export const name = "hi";

export function someName() {
}

// import { name, UserStruct, .... }
// import { name as ModuleAName, UserStruct, .... }
// export default name;
//
// import someNameForDefault, { name as ModuleAName, UserStruct, .... }
//
