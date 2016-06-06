import { EventEmitter, Output, Component, Input } from "@angular/core";
import { product } from "./types";

@Component({
  selector: "product",

  template: `
    <h2>{{ product?.name }}</h2>
    <p>{{ product?.description }}</p>

    <button class='button'
            (click)="added()"
            >
      Add
    </button>
  `
})
export class Product {
  @Input() product: product;

  // would default to 'addToCart' without
  // param to @Output()
  @Output('added') addToCart = new EventEmitter;

  added() {
    // emit an event with the product
    console.log("added (dumb product)");
    this.addToCart.emit({ product: this.product })
  }
}
