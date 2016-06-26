import { Component, Input, forwardRef, Inject} from "@angular/core";

import { ProductPage } from "./ProductPage.component";
import { staticProductList } from "./fixtures";
import { product } from "./types";
import { ProductStore } from "./ProductStore";

import { Routes, Router, ROUTER_DIRECTIVES } 
  from "@angular/router";


import { App } from "./App.component";
import { Tabs } from "./Tabs.component";

@Component({
  selector: "product-list",
  directives: [ProductPage, ROUTER_DIRECTIVES],
  styles: [`a { display: block }`],
  template: `
    <a
      *ngFor="let product of products"
      [routerLink]="['/products',product.id]"
      >
      {{ product.name }}
    </a>
  `,
})
export class ProductList {
  message: string = "Superhero shop";
  products: product[] = [];

  constructor(
    private store: ProductStore,
    @Inject(forwardRef(() => App)) private app: App
  ) {
  }

  ngOnInit() {

    this.store.all()
      .then(products => {
        // assign the products
        this.products = products;
      })
      .catch((err) => {
        console.error("error loading products", err);
      })
  }
}




