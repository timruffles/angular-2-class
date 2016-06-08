import { Component } from 
  "@angular/core";
  
import { ProductList }
  from "./ProductList";

import { staticProductList } from "./fixtures";

import { ProductStore } from "./ProductStore";

import { product } from "./types";

@Component({
  selector: "app",
  directives: [ProductList],
  providers: [ProductStore],
  template: `
    <product-list></product-list>
  `,
})
export class App {
}
