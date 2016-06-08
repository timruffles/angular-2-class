import { Component, Input } from 
  "@angular/core";
import { ProductStore } from "./ProductStore";

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

  @Input("productId") productId: number;

  constructor(private store: ProductStore) {
  }

  ngOnInit() {
    this.store.get(this.productId)
      .then(product => {
        this.product = product;
      });
  }



}

