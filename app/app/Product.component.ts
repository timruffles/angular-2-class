import { Component } from "@angular/core";

@Component({
   selector: "product",
   template: `
    <h2>Cape patch</h2> 
    <p>Hole in your cape? We've got you covered</p>

    <p><em>In cart:</em> {{ quantity }}</p>
    <button class='button'
            (click)="purchase()">Add to cart</button>
   `,
})
export class Product {
  quantity: 0;

  purchase() {
    this.quantity += 1;
  }
}

