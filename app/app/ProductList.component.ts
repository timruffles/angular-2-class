import { Input, Component } from "@angular/core";
import { Product } from "./Product.component";
import { product } from "./types";
import { ProductStore } from "./ProductStore";


@Component({
  selector: "product-list",
  directives: [Product],
  template: `
    <product
      *ngFor="let product of products"
      [product]=product
    >
    </product>
  `
})
export class ProductList {
  products: product[];

  constructor(store: ProductStore) {
    store.all()
      .then(products => this.products = products)

  }
}
