import { Component, Input } from "@angular/core";

import { ProductPage } from "./ProductPage.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";

import { ProductStore } from "./ProductStore";

@Component({
  selector: "product-list",
  directives: [ProductPage],
  template: `
    <product-page 
      *ngFor="let product of products"
      [productId]="product.id"
      >
    </product-page>
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


