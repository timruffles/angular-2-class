import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_URL } from "./types";

// this allows us to use `toPromise()` on our http results,
// giving us a nice simple promise API
import "rxjs/add/operator/toPromise";

@Injectable()
export class Payment {

  constructor(private http: Http) {
  }

  successful(payment: any) {
    return this.http.post("http://localhost:3999/test/checkout/success", payment)
      .toPromise();
  }

  failure(payment: any) {
    return Promise.reject(Error("payment failed!"));
  }
}


