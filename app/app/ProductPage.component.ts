import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product } from "./types";
import { RouteSegment } from "@angular/router";
import { ProductStore } from "./ProductStore";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]=product></product>
  `
})
export class ProductPage {
  product: product;

  constructor(segment: RouteSegment, store: ProductStore) {
    console.log(segment, store);
    store.get(Number(segment.getParam("id")))
      .then(product => this.product = product);
  }
  
}

