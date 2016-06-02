import { Input, Component } from "@angular/core";
import { Product} from "./Product.component";
import { product } from "./types";

@Component({
  selector: "product-list",
  directives: [Product],
  template: `
    <product *ngFor="let product of products" [product]="product">
    </product>
  `
})
export class ProductList {
  @Input() products: product[];
}

