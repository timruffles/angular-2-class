import { bootstrap } 
  from "@angular/platform-browser-dynamic";

import { Component } from "@angular/core";
import { Product } from "./Product.component";


@Component({
  selector: "app",
  directives: [Product],
  styles: [`
  `],
  template: `
    <div *ngFor='let demo of demos'>
      <h3>{{ demo.name }}</h3>
      <product [product]='demo.product'></product>
    </div>
  `,
})
class ProductDemo {
  demos = [
    { name :"Long name",
      product: {
        name: "really really really really really really really really really really really really really really really really long name"
      }},
    { name :"Short name",
      product: {
        name: "cat"
      }},
  ];
}


bootstrap(ProductDemo);

