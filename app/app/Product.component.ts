import { Component, Input } from "@angular/core";
import { product } from "./types";

@Component({
  selector: "product",
  template: `
    <h2>{{ product?.name }}</h2>
    <p>{{ product?.description }}</p>
  `
})
export class Product {
  @Input() product: product;
}
