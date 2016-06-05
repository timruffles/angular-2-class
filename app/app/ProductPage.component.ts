import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product } from "./types";
import { RouteSegment } from "@angular/router";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]=product></product>
  `
})
export class ProductList {
  constructor(RouteSegment) {
  }
  
}

