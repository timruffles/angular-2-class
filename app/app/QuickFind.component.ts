import { ViewChild, ElementRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { product } from "./types";
import { Observable } from "rxjs";

export type search = {
  category?: string,
  page?: number,
  q: string,
};

@Component({
  providers: [],
  styles: [
    `
      a {
        display: block;
      }
    `
  ],
  template: `
    <form #searchForm='ngForm'>
      <input type=search
             name=search
             ngModel
             >
      <select 
        name=category
        ngModel
        >
        <option *ngFor='#category in categories'
                [ngValue]=category>
          {{ category }}
        </option>
      </select>
    </form>

    <a *ngFor='#product of products'>
      {{ product.title }}
    </a>
  `,
})
export class QuickFind {
  @Input() products: product[];
  @Input() categories: string[];
  @Output() search = new EventEmitter();

  searchChanges: Observable<search>;

  @ViewChild(NgForm) form: NgForm; 

  ngAfterViewInit() {
    this.searchChanges = this.form.controls.search.valueChanges
      .combineLatest(this.form.controls.category.valueChanges)
      .map(([search, category]) => {
        return { search, category };
      })
  }
}
