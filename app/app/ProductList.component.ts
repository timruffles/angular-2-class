import { Input, Component } from "@angular/core";
import { ProductPage } from "./ProductPage.component";
import { product } from "./types";
import { ProductStore } from "./ProductStore";
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
  selector: "product-list",
  directives: [ProductPage, ROUTER_DIRECTIVES],
  template: `
    <h2>Products</h2>

    <p *ngFor="let product of products" 
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
  private products: product[];

  constructor(private store: ProductStore) {
  }

  ngOnInit() {
    this.store.all().then(ps => this.products = ps);
  }
  
}

