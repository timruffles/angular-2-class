import { Component, Input } from "@angular/core";

import { ProductList } from "./ProductList.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";
import { ProductStore } from "./ProductStore";

import { Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } 
  from "@angular/router";

@Routes([
  { path: "/",
    component: ProductList },
])
@Component({
  directives: [ProductList, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProductStore
  ],
  template: `
    <h1 [title]=message>{{ message }}</h1>
    <router-outlet></router-outlet>
  `,
  selector: "app",
})
export class App {
  message: string = "Superhero shop";

  constructor(router: Router) {
  }
}


