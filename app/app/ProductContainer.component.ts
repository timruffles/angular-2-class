import { Input, Component } from "@angular/core";
import { product } from "./types";

@Component({
   selector: "product-container",
   template: `
     <product product="product"
              [cartEntry]="entry | async"
              (command)="handle($event)"
              >
     </product>
   `,
})
export class Product {
  constructor(private cart: Cart) {
    this.entry = cart.entry(product);
  }

  @Input() product: product;

  handle($event) {
    switch($event.type) {
      case "addToCart":
        return this.cart.add(product);
    }
  }

}

