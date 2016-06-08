import { Component } from "@angular/core";
import { ProductStore } from "./ProductStore";
import { Cart } from "./Cart";
import { Payment } from "./Payment";

@Component({
  selector: "checkout",
  directives: [],
  templateUrl: "app/Checkout.component.html",
})
export class Checkout {

  transaction: any;

  constructor(private payment: Payment) {
  }

  checkout = {};

  doCheckout(submittedData) {
    this.transaction = { pending: true };
    this.payment.successful(submittedData)
      .then(() => this.transaction = { successful: true })
  }

}


