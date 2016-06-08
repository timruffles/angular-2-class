import { Component, Input } from 
  "@angular/core";
import { ProductStore } from "./ProductStore";

import { RouteSegment } from "@angular/router";

import { Product } from "./Product";
import { product } from "./types";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]="product">
    </product>
  `,
})
export class ProductPage {
  product: product;

  constructor(private store: ProductStore, private segment: RouteSegment) {
  }

  ngOnInit() {
    const productId = parseInt(this.segment.getParam("id"));

    this.store.get(productId)
      .then(product => {
        this.product = product;
      });
  }



}

