import { Component } from 
  "@angular/core";
  
import { ProductList }
  from "./ProductList";

import { staticProductList } from "./fixtures";

import { product } from "./types";

@Component({
  selector: "app",
  directives: [ProductList],
  template: `
    <product-list></product-list>
  `,
})
export class App {
}
