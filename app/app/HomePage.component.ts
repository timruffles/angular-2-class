import { Component, ViewChild, ElementRef } from "@angular/core";
import { QuickFind } from "./QuickFind.component";
import { Observable } from "rxjs";
import { ProductStore } from "./ProductStore";

@Component({
  selector: "home-page",
  directives: [QuickFind],
  template: `
    <quick-find [products]=products
                [categories]=categories
                #search
                ></quick-find>
  `,
})
export class HomePage {

  @ViewChild(QuickFind) search: QuickFind; 

  constructor(
    private store: ProductStore
  ) {
  }

  ngAfterViewInit() {
    this.search
      .searchChanges
      .subscribe(e => {
        console.log(e);
      })
  }
}
