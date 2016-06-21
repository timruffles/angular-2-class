import { bootstrap } 
  from "@angular/platform-browser-dynamic";

import { Component } from "@angular/core";
import { Product } from "./Product.component";
import { TAB_DIRECTIVES } from "./Tabs";

import { PowerButton } from "./PowerButton.directive";
import { Unless } from "./Unless.directive";
import { CaptionedProduct } from "./CaptionedProduct.component";

@Component({
  selector: "app",
  directives: [Product, Unless, PowerButton, CaptionedProduct, TAB_DIRECTIVES],
  styles: [`
  `],
  template: `

    <captioned-product>
      <img src="foo.png">
      <caption>Hello!</caption>
    </captioned-product>


    <ul class='tabs'>
      <li class='tabs-title' (click)="activeName = 'a'">
        <a>Tab A</a>
      </li>

      <li class='tabs-title' (click)="activeName = 'b'">
        <a>Tab B</a>
      </li>

      <li class='tabs-title' (click)="activeName = 'c'">
        <a>Tab C</a>
      </li>
    </ul>

    <tabs [activeName]="activeName" class='tabs-content'>
      <div *tab="'a'"><h2>Hi, I'm tab A</h2></div>
      <div *tab="'b'">
        <h2>Tab B is more fun</h2>
        <img src='img/goat.jpg' style='max-height: 200px'>
      </div>
      <div *tab="'c'">
        <h2>Back to boring</h2>
        <p>Sorry</p>
      </div>
    </tabs>


  `,
})
class ProductDemo {
  activeName = false;
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

