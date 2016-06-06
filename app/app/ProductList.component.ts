import { Input, Component } from "@angular/core";
import { product } from "./types";
import { ProductStore } from "./ProductStore";
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
  selector: "product-list",
  directives: [ROUTER_DIRECTIVES],
  template: `
    <p
      *ngFor="let product of products"
    >
      <a
        [routerLink]='["/products", product.id]'
      >
        {{ product.name }}
      </a>
    </p>
  `
})
export class ProductList {
  products: product[];

  constructor(store: ProductStore) {
    store.all()
      .then(products => this.products = products)

  }
}
