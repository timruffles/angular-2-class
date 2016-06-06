import { Component } from "@angular/core";
import { ProductList } from "./ProductList.component";
import { ProductPage } from "./ProductPage.component";
import { staticProductList } from "./fixtures";
import { ProductStore } from "./ProductStore";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from "@angular/router";

const SHOP_NAME = "Super shop";

@Routes([
  {
    path: "/",
    component: ProductList,
  },
  {
    path: "/products/:id",
    component: ProductPage,
  },
])
@Component({
  selector: "app",
  directives: [ProductList, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    { provide: ProductStore, 
      useClass: ProductStore }
  ],
  template: `
    <h1 class='shop-name'>${ SHOP_NAME }</h1>

    <router-outlet></router-outlet>
  `
})
export class App {
  products = staticProductList;

  constructor(router: Router) {
  }
}
