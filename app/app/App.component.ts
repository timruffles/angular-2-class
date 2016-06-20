import { Component, Input } from "@angular/core";

import { ProductList } from "./ProductList.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";
import { ProductStore } from "./ProductStore";

@Component({
  directives: [ProductList],
  providers: [
    ProductStore
  ],
  template: `
    <h1 [title]=message>{{ message }}</h1>
    <product-list></product-list>
  `,
  selector: "app",
})
export class App {
  message: string = "Superhero shop";
}


