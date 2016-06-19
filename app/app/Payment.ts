import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_URL } from "./types";
import "rxjs/add/operator/toPromise";

@Injectable()
export class Payment {
  constructor(private http: Http, private apiUrl: API_URL) {
  }

  successful(payment: any) {
    return this.http.post(this.apiUrl + "/test/checkout/success", payment)
      .toPromise();
  }

  failure(payment: any) {
    return this.http.post(this.apiUrl + "/test/checkout/failure", payment)
      .toPromise();
  }
}

