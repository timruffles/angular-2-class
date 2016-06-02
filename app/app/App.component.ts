import { Component } from "@angular/core";
import { ProductList } from "./ProductList.component";
import { product } from "./types";
import { longerStaticProductList } from "./fixtures";

@Component({
   selector: "app",
   directives: [ProductList],
   template: `
    <h1>Shop</h1> 
    <product-list [products]="products"></product-list>
   `,
})
export class App {
  products = longerStaticProductList;
}

