import { Component, Input } from "@angular/core";

import { Product } from "./Product.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";

import { ProductStore } from "./ProductStore";

@Component({
  selector: "product-list",
  directives: [Product],
  template: `
    <product 
      *ngFor="let product of products"
      [product]="product"
      >
    </product>
  `,
})
export class ProductList {
  message: string = "Superhero shop";
  products: product[] = [];

  constructor(
    private store: ProductStore
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


