import { Component, provide } from "@angular/core";
import { Cart } from "./Cart";

import { ClientStorage } from "./ClientStorage";
import { ProductList } from "./ProductList.component";
import { ProductPage } from "./ProductPage.component";
import { Checkout } from "./Checkout.component";

import { API_URL } from "./types";
import { ProductStore } from "./ProductStore";
import { Payment } from "./Payment";

import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

@Component({
   selector: "app",
   directives: [ProductList, ROUTER_DIRECTIVES],
   providers: [
     ProductStore,
     Cart,
     Payment,
     ClientStorage,
     HTTP_PROVIDERS,
     { provide: API_URL, useValue: "http://localhost:3999" },
     ROUTER_PROVIDERS
   ],
   template: `
    <nav>
      <h1><a href="/">Super-shop!</a></h1> 
      <a [routerLink]="['/checkout']">Checkout</a>
    </nav>
    <router-outlet></router-outlet>
   `,
})
@Routes([
  { path: "/", component: ProductList },
  { path: "/products/:id", component: ProductPage },
  { path: "/checkout", component: Checkout }
])
export class App {
  constructor(private router: Router) {
  }
}

