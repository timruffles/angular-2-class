import { Component } from "@angular/core";
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router";
import { ProductList } from "./ProductList.component";
import { ProductPage } from "./ProductPage.component";
import { ProductStore } from "./ProductStore";

@Component({
   selector: "app",
   directives: [ROUTER_DIRECTIVES],
   providers: [ROUTER_PROVIDERS, ProductStore],
   template: `
    <h1>Shop</h1> 
    <router-outlet></router-outlet>
   `,
})
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
export class App {
  constructor(private router: Router) {
  }
}

