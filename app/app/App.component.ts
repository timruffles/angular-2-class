import { Component } from "@angular/core";
import { Cart } from "./Cart";
import { ClientStorage } from "./ClientStorage";
import { ProductList } from "./ProductList.component";
import { ProductPage } from "./ProductPage.component";
import { ProductStore } from "./ProductStore";
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from "@angular/router";

@Component({
   selector: "app",
   directives: [ProductList, ROUTER_DIRECTIVES],
   providers: [
     ProductStore,
     Cart,
     ClientStorage,
     ROUTER_PROVIDERS
   ],
   template: `
    <h1>Shop</h1> 
    <router-outlet></router-outlet>
   `,
})
@Routes([
  { path: "/", component: ProductList },
  { path: "/products/:id", component: ProductPage }
])
export class App {
  constructor(private router: Router) {
  }
}

