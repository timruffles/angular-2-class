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

    <button (click)="activeName = 'a'">
      Enable A
    </button>

    <button (click)="activeName = 'b'">
      Enable B
    </button>

    <button (click)="activeName = 'c'">
      Enable C
    </button>

    <tab-progression [activeName]="activeName">
      <div *tab="'a'" [enabled]='foo'>one</div>
      <div *tab="'b'">two</div>
      <div *tab="'c'">three</div>
    </tab-progression>


    <button powerButton class=button>
      Slam!!
    </button>

    <p *unless='cleared'>
      Not cleared yet!
    </p>

    <button powerButton class=button (click)='cleared = !cleared'>
      Slam!!
    </button>

    <div *ngFor='let demo of demos'>
      <h3>{{ demo.name }}</h3>
      <product [product]='demo.product'></product>
    </div>
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

