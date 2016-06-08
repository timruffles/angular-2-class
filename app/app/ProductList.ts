import { Component } from 
  "@angular/core";
  
import { Product }
  from "./Product";

import { staticProductList } from "./fixtures";

import { product } from "./types";

@Component({
  selector: "product-list",
  directives: [Product],
  template: `
    <product *ngFor='let product of filteredProducts()'
             [product]='product'></product>
  `,
})
export class ProductList {
  products: product[] = staticProductList;

  filteredProducts() {
    return this.products.filter(p => p.name.length > 5)
  }
}
