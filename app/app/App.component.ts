import { Component, Input, provide, PLATFORM_DIRECTIVES  } from "@angular/core";

import { ProductList } from "./ProductList.component";
import { staticProductList } from "./fixtures";


import { product } from "./types";
import { ProductStore } from "./ProductStore";
import { ProductPage } from "./ProductPage.component";
import { Cart } from "./Cart";
import { ClientStorage } from "./ClientStorage";

import { Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } 
  from "@angular/router";


import { Checkout } from "./Checkout.component";
import { Payment } from "./Payment";

@Routes([
  { path: "/",
    component: ProductList },
  { path: "/products/:id",
    component: ProductPage },
  { path: "/checkout",
    component: Checkout },
])
@Component({
  directives: [ProductList, ROUTER_DIRECTIVES],
  providers: [
    Payment,
    { provide: ClientStorage, 
      useClass: ClientStorage},
    provide(Cart, { useClass: Cart }),
    ROUTER_PROVIDERS,
    ProductStore
  ],
  template: `
    <h1 [title]=message
        [class.something]="someexpress" 
      >{{ message }}</h1>
    <router-outlet></router-outlet>

    <button powerButton class='button'>
      BOOM!
    </button>
  `,
  selector: "app",
})
export class App {
  message: string = "Superhero shop";

  constructor(router: Router) {
  }
}


