import { Component } from "@angular/core";
import { ProductList } from "./ProductList.component";
import { ProductStore } from "./ProductStore";

@Component({
   selector: "app",
   directives: [ProductList],
   providers: [ProductStore],
   template: `
    <h1>Shop</h1> 
    <product-list></product-list>
   `,
})
export class App {
  constructor() {
  }
}

