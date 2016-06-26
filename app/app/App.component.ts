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

import { Tabs } from "./Tabs.component";
import { Tab } from "./Tab.directive";

import { Checkout } from "./Checkout.component";
import { Payment } from "./Payment";

import { SearchPage } from "./SearchPage.component";

@Routes([
  { path: "/",
    component: ProductList },
  { path: "/products/:id",
    component: ProductPage },
  { path: "/checkout",
    component: Checkout },
  { path: "/search-page",
    component: SearchPage },
])
@Component({
  directives: [
    Tab,
    ProductList, 
    ROUTER_DIRECTIVES, 
    Tabs
  ],
  providers: [
    Payment,
    { provide: ClientStorage, 
      useClass: ClientStorage},
    provide(Cart, { useClass: Cart }),
    ROUTER_PROVIDERS,
    ProductStore
  ],
  template: `<div *tab='f'></div> <tabs></tabs> <router-outlet></router-outlet>` || `
    <ul class='tabs'>
      <li class='tabs-title' (click)="activeName = 'a'">
        <a>Tab A</a>
      </li>

      <li class='tabs-title' (click)="activeName = 'b'">
        <a>Tab B</a>
      </li>

      <li class='tabs-title' (click)="activeName = 'c'">
        <a>Tab C</a>
      </li>
    </ul>

    <tabs [activeName]="activeName" class='tabs-content'>
      <div *tab="'a'">
        <h2>Hi, I'm tab A</h2>
      </div>
      <div *tab="'b'">
        <h2>Tab B is more fun</h2>
        <img src='img/goat.jpg' style='max-height: 200px'>
      </div>
      <div *tab="'c'">
        <h2>Back to boring</h2>
        <p>Sorry</p>
      </div>
    </tabs>



  `,
  selector: "app",
})
export class App {
  message: string = "Superhero shop";
  activeName = "a";

  emergency= false;

  constructor(router: Router) {
  }
}


