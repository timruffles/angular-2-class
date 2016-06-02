import { Input, Component } from "@angular/core";
import { product } from "./types";

@Component({
   selector: "product",
   template: `
    <h2>{{ product?.name }}</h2> 
    <p>{{ product?.description }}</p>

    <p><em>In cart:</em> {{ quantity }}</p>
    <button class='button'
            (click)="purchase()">Add to cart</button>
   `,
})
export class Product {
  quantity: 0;

  @Input() product: product;

  purchase() {
    this.quantity += 1;
  }

  ngOnChanges(ch) {
    console.log(ch);
  }
}

