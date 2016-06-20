import { Component, Input } from "@angular/core";

import { Product } from "./Product.component";
import { staticProductList } from "./fixtures";

import { product } from "./types";

import { ProductStore } from "./ProductStore";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]=product>
    </product>
  `,
})
export class ProductPage {
  @Input() productId: string;
  product: product;

  constructor(
    private store: ProductStore
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.store.get(parseInt(this.productId))
      .then(product => {
        // assign the products
        this.product = product;
      })
      .catch((err) => {
        console.error("error loading products", err);
      })
  }
}



