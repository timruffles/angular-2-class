import { Component, forwardRef } from 
  "@angular/core";

import { ROUTER_DIRECTIVES }
  from "@angular/router";
  
import { ProductPage }
  from "./ProductPage";

import { ProductStore } from "./ProductStore";

import { product } from "./types";


import { Routes } from "@angular/router";

@Component({
  selector: "product-list",
  directives: [ROUTER_DIRECTIVES],
  providers: [],
  template: `
    <p
         *ngFor='let product of products'
      >
      <a [routerLink]='["/products", product.id]'
        >
        {{ product.name }}
      </a>
    </p>
  `,
})
export class ProductList {
  products: product[] = [];

  constructor(private store: ProductStore) {
    this.store.all()
      .then(products => {
        this.products = products;
      });
  }

  filteredProducts() {
    return this.products.filter(p => p.name.length > 5)
  }
}
