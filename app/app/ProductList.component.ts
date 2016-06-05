import { Input, Component } from "@angular/core";
import { ProductPage } from "./ProductPage.component";
import { product } from "./types";
import { ProductStore } from "./ProductStore";


@Component({
  selector: "product-list",
  directives: [ProductPage],
  template: `
    <h2>Products</h2>

    <product-page *ngFor="let product of products" 
                  [productId]=product.id
                  >
    </product-page>
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

