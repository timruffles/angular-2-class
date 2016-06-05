import { Component } from "@angular/core";
import { Product } from "./Product.component";

@Component({
  directives: [Product],
  templateUrl: "app/ProductDemo.component.html",
})
export class ProductDemo {
  
}
