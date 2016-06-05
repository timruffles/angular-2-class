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

  constructor(private store: ProductStore, private segment: RouteSegment) {
  }

  ngOnInit() {
    this.store.get(Number(this.segment.getParam('id')))
      .then(product => this.product = product);
  }
  
}

