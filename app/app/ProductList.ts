import { Component } from 
  "@angular/core";
  
import { ProductPage }
  from "./ProductPage";

import { ProductStore } from "./ProductStore";

import { product } from "./types";

@Component({
  selector: "product-list",
  directives: [ProductPage],
  providers: [],
  template: `
    <product-page *ngFor='let product of filteredProducts()'
                  [productId]='product.id'
                  >
    </product-page>
  `,
})
export class ProductList {
  products: product[] = [];

  constructor(private store: ProductStore) {
    this.store.all()
      .then(products => {
        this.products = products;
      });
  }

  filteredProducts() {
    return this.products.filter(p => p.name.length > 5)
  }
}
