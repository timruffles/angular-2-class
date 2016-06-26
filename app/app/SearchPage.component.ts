import { Component, ViewChild, ElementRef } from "@angular/core";
import { QuickFind } from "./QuickFind.component";
import { ProductStore } from "./ProductStore";
import { product } from "./types";

import { Observable } from "rxjs";

@Component({
  selector: "home-page",
  directives: [QuickFind],
  template: `
    <quick-find [products]='products'
                [categories]=categories
                #search
                ></quick-find>
  `,
})
export class SearchPage {

  categories: { name: string, id: string }[];
  products: Observable<product[]>;

  @ViewChild(QuickFind) search: QuickFind; 

  constructor(
    private store: ProductStore
  ) {
    this.categories = store.categories();
  }

  ngAfterViewInit() {
    this.products = this.search
      .searches
      // Observable<search>
      .debounceTime(50)
      // Observable<search>
      .switchMap(search => this.store.search(search))
  }
}


