import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product } from "./types";
import { longerStaticProductList } from "./fixtures";
import { ROUTER_DIRECTIVES } from "@angular/router";


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
  constructor() {
    console.log("I was made", this);
  }
  products = longerStaticProductList;
  
}

