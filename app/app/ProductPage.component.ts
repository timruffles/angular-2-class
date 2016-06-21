import { Component, Input } from "@angular/core";

import { Product, addedEvent} from "./Product.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";

import { ProductStore } from "./ProductStore";

import { RouteSegment } from "@angular/router";
import { Cart } from "./Cart";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]="product"
             [entry]="entry"
             (added)="added()">
    </product>
  `,
})
export class ProductPage {
  product: product;
  entry: any;

  constructor(
    private store: ProductStore,
    private cart: Cart,
    private segment: RouteSegment
  ) {
  }

  added(e: addedEvent) {
    this.entry = null;
    this.cart.add(this.product.id)
      .then(entry => this.entry = entry);
  }

  ngOnInit() {
    const productId = parseInt(this.segment.getParam("id"));

    this.cart.get(productId)
      .then(entry => this.entry = entry);

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



