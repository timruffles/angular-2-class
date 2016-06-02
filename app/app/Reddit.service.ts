import { Injectable } from "@angular/core";
import { http } from "@angular/http";

@Injectable()
export class Reddit {
  constructor(private http: Http) { }
  frontpage() {
    return this.http.get(`https://www.reddit.com/.json`)
      .toPromise()
    .then(resp => {
      return resp.json()
        .data
        .children
        .map(child => child.data);
    })
  }
}
