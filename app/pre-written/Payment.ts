import { Injectable } from "@angular/core";
import { API_URL } from "./types";

// this allows us to use `toPromise()` on our http results,
// giving us a nice simple promise API
import "rxjs/add/operator/toPromise";

@Injectable()
export class Payment {

  successful(payment: any) {
    return Promise.resolve({ ok: true })
  }

  failure(payment: any) {
    return Promise.reject(Error("payment failed!"));
  }
}

