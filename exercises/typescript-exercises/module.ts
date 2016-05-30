
export function someFunction() {
  console.log("hi from module");
}

export class Header {
  constructor(public text: string,
    public level: number,
    private style: string) {
  }
}
