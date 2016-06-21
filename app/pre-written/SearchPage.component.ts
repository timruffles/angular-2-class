import { Component, ViewChild, ElementRef } from "@angular/core";
import { QuickFind } from "./QuickFind.component";
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

  categories: { name: string, id: string }[];

  @ViewChild(QuickFind) search: QuickFind; 

  constructor(
    private store: ProductStore
  ) {
    this.categories = store.categories();
  }

}


