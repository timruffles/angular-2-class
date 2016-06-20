import { Component, Input } from "@angular/core";

import { Product } from "./Product.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";

import { ProductStore } from "./ProductStore";

import { RouteSegment } from "@angular/router";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]=product>
    </product>
  `,
})
export class ProductPage {
  product: product;

  constructor(
    private store: ProductStore,
    private segment: RouteSegment
  ) {
  }

  ngOnInit() {
    const productId = parseInt(this.segment.getParam("id"));
    this.store.get(productId)
      .then(product => {
        // assign the products
        this.product = product;
      })
      .catch((err) => {
        console.error("error loading products", err);
      })
  }

  ngOnChanges() {
  }
}



