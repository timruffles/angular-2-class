import { Component, Input } from "@angular/core";
import { Payment } from "./Payment";

@Component({
  templateUrl: "app/Checkout.component.html",
})
export class Checkout {
  initial = { superName: "bob the wonder man", captcha: true };
  transaction : { state: string } = { state: "waiting" };

  constructor(
    private payment: Payment
  ) {
  }

  checkout(data: any) {
    this.transaction = { state: "pending" };

    this.payment.successful(data)
      .then(() => {
        this.transaction = { state: "success" };
        console.log("yay");
      })
      .catch((error: Error) => {
        this.transaction = { state: "error" };
        console.log("boo", error);
      })
  }
}
