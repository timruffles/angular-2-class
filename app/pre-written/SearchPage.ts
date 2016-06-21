import { Component, ViewChild, ElementRef } from "@angular/core";
import { QuickFind } from "./QuickFind.component";
import { Observable } from "rxjs";
import { ProductStore } from "./ProductStore";
import { product } from "./types";

@Component({
  selector: "home-page",
  directives: [QuickFind],
  template: `
    <quick-find [products]='products | async'
                [categories]=categories
                #search
                ></quick-find>
  `,
})
export class SearchPage {

  products: Observable<product[]>;
  categories: { name: string, id: string }[];

  @ViewChild(QuickFind) search: QuickFind; 

  constructor(
    private store: ProductStore
  ) {
    this.categories = store.categories();
  }

  ngAfterViewInit() {
    this.products = <Observable<product[]>>this.search
      .searchChanges
      .startWith({q: ""})
      .switchMap(e => this.store.search(e))
  }
}

