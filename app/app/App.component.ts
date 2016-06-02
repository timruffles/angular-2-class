import { Component } from "@angular/core";
import { Product } from "./Product.component";
import { product } from "./types";
import { staticProductList } from "./fixtures";

@Component({
   selector: "app",
   directives: [Product],
   template: `
    <h1>Shop</h1> 
    <product [product]="products[0]"></product>
    <product [product]="products[1]"></product>
    <product [product]="products[2]"></product>
   `,
})
export class App {
  products = staticProductList;
}

