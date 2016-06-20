import { Component, ViewChild, ElementRef } from "@angular/core";
import { QuickFind } from "./QuickFind.component";
import { Observable } from "rxjs";

@Component({
  directives: [QuickFind],
  template: `
    <quick-find [products]=products
                [categories]=categories
                #search
                ></quick-find>
  `,
})
export class HomePage {

  @ViewChild('search') search: ElementRef; 

  constructor(
    private store: ProductStore
  ) {
  }

  ngAfterViewInit() {
    Observable.fromEvent(this.search, "search")
      .subscribe(e => {
        console.log(e);
      })
  }
}
