import { Component, Input } from "@angular/core";

import { ProductList } from "./ProductList.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";
import { ProductStore } from "./ProductStore";
import { ProductPage } from "./ProductPage.component";
import { HomePage } from "./HomePage.component";

import { Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } 
  from "@angular/router";

import { FlashSales } from "./FlashSales.component";

@Routes([
  { path: "/",
    component: HomePage },
  { path: "/products/:id",
    component: ProductPage },
  { path: "/flash-sales",
    component: FlashSales },
])
@Component({
  directives: [ProductList, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProductStore
  ],
  template: `
    <h1 [title]='message'>{{ message }}</h1>
    <router-outlet></router-outlet>
  `,
  selector: "app",
})
export class App {
  message: string = "Superhero shop";

  constructor(router: Router) {
  }
}


