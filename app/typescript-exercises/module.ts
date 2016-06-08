export const name = "module";


class Greeter {

  // equivalent constructor(private greeting: string) {}
  greeting: string;
  private dontUseMe = true;

  constructor(
    greeting: string
  ) {
  }

  greet() {
    console.log("hello");
  }
}


const lookup: { [id: string]: string } = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
};


