import { Injectable } from "angular2/core";
import { http } from "angular2/http";

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
