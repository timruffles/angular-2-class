import { Component, Input, SimpleChange } from "@angular/core";
import { product } from "./types";

@Component({
  template: `
    <h1 [title]='product?.name'>{{ product?.name }}</h1>
    <p>{{ product?.description }}</p>
    <p>Quantity: {{ quantity }}</p>
    <button (click)="buy($event)" 
            class='button'
            [class.bought]="quantity > 0">
      Buy
    </button>
  `,
  styles: [
    `
      button {
        transition: all 5s;
      }

      button.bought {
        background: green;
      }
    `
  ],
  selector: "product",
})
export class Product {

  @Input() product: product;
  quantity = 0;

  buy() {
    debugger;
    this.quantity += 1;
  }

  ngOnChanges(ch: SimpleChange) {
    console.log(ch);
  }

}


