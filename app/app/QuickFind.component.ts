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
  selector: "quick-find",
  providers: [],
  directives: [],
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
             name=q
             ngModel
             >
      <select 
        name=category
        ngModel
        >
        <option *ngFor='let category of categories'
                [ngValue]='category.id'>
          {{ category.name }}
        </option>
      </select>
    </form>

    <a *ngFor='let product of products'>
      {{ product.name }}
    </a>
  `,
})
export class QuickFind {
  @Input() products: product[];
  @Output() search = new EventEmitter();
  @Input() categories: string[];

  searchChanges: Observable<search>;
  @ViewChild(NgForm) form: NgForm; 

  ngAfterViewInit() {
    this.searchChanges = this.form.form.valueChanges
      .asObservable();

    this.form.form.valueChanges
      .subscribe((ch) => {
        this.search.emit(ch);
      });
  }
}
