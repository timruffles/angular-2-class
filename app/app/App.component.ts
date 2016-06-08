import { Component } from "@angular/core";
import { ProductList } from "./ProductList.component";
import { ProductPage } from "./ProductPage.component";
import { staticProductList } from "./fixtures";
import { ProductStore } from "./ProductStore";
import { Cart } from "./Cart";
import { Checkout } from "./Checkout.component";
import { ClientStorage } from "./ClientStorage";
import { Payment } from "./Payment";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

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
  {
    path: "/checkout",
    component: Checkout,
  },
])
@Component({
  selector: "app",
  directives: [ProductList, ROUTER_DIRECTIVES],
  providers: [
    Cart,
    ClientStorage,
    Payment,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { provide: ProductStore, 
      useClass: ProductStore }
  ],
  template: `
    <h1 class='shop-name'>${ SHOP_NAME }</h1>
    <a [routerLink]='["/checkout"]'>Checkout</a>

    <router-outlet></router-outlet>
  `
})
export class App {
  products = staticProductList;

  constructor(router: Router) {
  }
}
