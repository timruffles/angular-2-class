import { Component, Input, SimpleChange, 
  Output, EventEmitter } from 
  "@angular/core";

import { product, cartEntry } from "./types";


@Component({
  selector: "checkout",
  templateUrl: "app/Checkout.component.html",
})
export class Checkout {

  submitted(values) {
    console.log(values);
  }

}

