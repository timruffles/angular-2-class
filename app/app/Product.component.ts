import { Input, Output, Component, EventEmitter } from "@angular/core";
import { product, cartEntry } from "./types";

@Component({
   selector: "product",
   template: `
    <h2>{{ product?.name }}</h2> 
    <p>{{ product?.description }}</p>

    <p><em>In cart:</em> {{ entry ? entry.quantity : "Loading..." }}</p>
    <button class='button'
            [disabled]="!entry"
            (click)="purchase()">
      Add to cart
    </button>
   `,
})
export class Product {
  @Input() product: product;
  @Input() entry: cartEntry;
  @Output() added = new EventEmitter<{ product: product }>();

  purchase() {
    this.added.emit({ product: this.product });
  }
}

