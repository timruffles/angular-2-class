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
  @Input() productId: number;

  constructor(private store: ProductStore) {
  }

  ngOnInit() {
    this.store.get(Number(this.productId))
      .then(product => this.product = product);
  }
  
}

