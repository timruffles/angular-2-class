import { Component, Input, SimpleChange, 
  Output, EventEmitter } from 
  "@angular/core";

import { product, cartEntry } from "./types";

export type added = { product: product };

@Component({
  selector: "product",
  styles: [`
    button.purchased {
      background: green;
    }
  `],
  template: `
    <h2 >{{ product?.name }}</h2>
    <p>{{ product?.description }}</p>

    <p><em>In basket: </em> {{ cartEntry ? cartEntry.quantity : "Loading..." }}</p>

    <button class='button'
            (click)="purchase()"
            [disabled]="!cartEntry"
      >
      Buy me
    </button>
  `,
})
export class Product {

  @Input("product") product: product;
  @Input("cartEntry") cartEntry: cartEntry;
  @Output("added") added = new EventEmitter<added>();

  purchase() {
    this.added.emit({ product: this.product });
  }


}
