import { Component, Input } from 
  "@angular/core";
import { ProductStore } from "./ProductStore";

import { RouteSegment } from "@angular/router";

import { Cart } from "./Cart";
import { Product } from "./Product";
import { product, cartEntry } from "./types";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]="product"
             [cartEntry]="cartEntry"
             (added)="added()"
    >
    </product>
  `,
})
export class ProductPage {
  product: product;
  cartEntry: cartEntry;

  constructor(
    private store: ProductStore,
    private segment: RouteSegment,
    private cart: Cart) {
  }

  added() {
    this.cartEntry = null;
    this.cart.add(this.product.id)
      .then(e => this.cartEntry = e)
  }

  ngOnInit() {
    const productId = parseInt(this.segment.getParam("id"));

    this.store.get(productId)
      .then(product => {
        this.product = product;
      });

    this.cart.get(productId)
      .then(e => this.cartEntry = e);
  }



}

