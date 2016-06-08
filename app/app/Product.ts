import { Component, Input, SimpleChange } from 
  "@angular/core";

import { product } from "./types";

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

    <p><em>In basket: </em> {{ quantity }}</p>

    <button class='button'
            (click)="purchase()"
            [class.purchased]="quantity >= 1"
      >
      Buy me
    </button>
  `,
})
export class Product {

  @Input("product") product: product;

  quantity = 0;

  purchase() {
    this.quantity += 1;
  }

  ngOnChanges(changes: SimpleChange) {
  }
}
