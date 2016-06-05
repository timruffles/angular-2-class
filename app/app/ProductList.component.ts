import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product } from "./types";
import { ProductStore } from "./ProductStore";


@Component({
  selector: "product-list",
  directives: [Product],
  template: `
    <h2>Products</h2>

    <product *ngFor="let product of products" [product]=product>
    </product>
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

