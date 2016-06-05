import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product } from "./types";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { ProductStore } from "./ProductStore";


@Component({
  selector: "product-list",
  directives: [Product, ROUTER_DIRECTIVES],
  template: `
    <h1>I am product list</h1>

    <div *ngFor="let product of products">
      <a [routerLink]="['/products', product.id]">{{ product.name }}</a>
    </div>
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

