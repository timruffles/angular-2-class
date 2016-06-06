import { Component } from "@angular/core";
import { RouteSegment } from "@angular/router";
import { Product } from "./Product.component";
import { ProductStore } from "./ProductStore";
import { product, cartEntry } from "./types";
import { Cart } from "./Cart";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]=product
             [entry]=entry
            (added)="added($event.product)"
             >
    </product>
  `,
})
export class ProductPage {

  product: product;
  entry: cartEntry;

  constructor(
    private segment: RouteSegment,
    private cart: Cart,
    private store: ProductStore) {

    const productId = Number(segment.parameters.id);

    // take in id from URL
    // load from store
    store.get(productId)
      .then(product => this.product = product);

    this.cart.get(productId)
      .then(e => this.entry = e)
  }

  added(product: product) {
    this.cart.add(product.id)
      .then(entry => {
        this.entry = entry;
      })
  }
}


