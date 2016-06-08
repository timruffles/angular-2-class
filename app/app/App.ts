import { Component } from 
  "@angular/core";

import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router }
  from "@angular/router";

import { Checkout } from "./Checkout";
  
import { ProductList }
  from "./ProductList";

import { Cart } from "./Cart";
import { ClientStorage } from "./ClientStorage";

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
  { path: "/checkout",
    component: Checkout }, 
])
@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductStore, ClientStorage, Cart, ROUTER_PROVIDERS],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  constructor(router: Router) {
  }
}
