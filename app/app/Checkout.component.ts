import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "app/Checkout.component.html",
})
export class Checkout {
  initial = { superName: "bob the wonder man", captcha: true };

  checkout(data: any) {
    console.log(data);
  }
}
