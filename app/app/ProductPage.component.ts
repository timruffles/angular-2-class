import { Component } from "@angular/core";
import { RouteSegment } from "@angular/router";
import { Product } from "./Product.component";
import { ProductStore } from "./ProductStore";
import { product } from "./types";

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
    private segment: RouteSegment,
    private store: ProductStore) {

    // take in id from URL
    // load from store
    store.get(Number(segment.parameters.id))
      .then(product => this.product = product);
  }

}


