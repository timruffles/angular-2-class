import { Component } from "@angular/core";
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router";
import { ProductList } from "./ProductList.component";
import { Product } from "./Product.component";

@Component({
   selector: "app",
   directives: [ROUTER_DIRECTIVES],
   providers: [ROUTER_PROVIDERS],
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
        component: Product,
    },
])
export class App {
  constructor(private router: Router) {
  }
}

