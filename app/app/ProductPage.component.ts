import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product, cartEntry } from "./types";
import { RouteSegment } from "@angular/router";
import { ProductStore } from "./ProductStore";
import { Cart } from "./Cart";

@Component({
  selector: "product-page",
  directives: [Product],
  template: `
    <product [product]=product
             [entry]=entry
             (added)="added()"
             ></product>
  `
})
export class ProductPage {
  product: product;
  entry: cartEntry;
  productId: number;

  constructor(
    private store: ProductStore,
    private segment: RouteSegment,
    private cart: Cart
    ) {
  }

  ngOnInit() {
    const productId = this.productId = Number(this.segment.getParam('id'));

    this.store.get(productId)
      .then(product => this.product = product);

    this.cart.get(productId)
      .then(entry => this.entry = entry);
  }
  
  added() {
    this.entry = null;
    this.cart.add(this.productId)
      .then(entry => this.entry = entry);
  }
}

