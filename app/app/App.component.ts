import { Component } from "@angular/core";
import { Product } from "./Product.component";

@Component({
   selector: "app",
   directives: [Product],
   template: `
    <h1>Shop</h1> 
    <product>
    </product>
   `,
})
export class App {
}

