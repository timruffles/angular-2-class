import { Component } from 
  "@angular/core";

import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router }
  from "@angular/router";
  
import { ProductList }
  from "./ProductList";

import { ProductPage }
  from "./ProductPage";

import { staticProductList } from "./fixtures";

import { ProductStore } from "./ProductStore";

import { product } from "./types";

@Routes([
  { path: "/",
    component: ProductList }, 
  { path: "/products/:id",
    component: ProductPage }, 
])
@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductStore, ROUTER_PROVIDERS],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  constructor(router: Router) {
  }
}
