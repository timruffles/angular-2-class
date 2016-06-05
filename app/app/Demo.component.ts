import { Component, ViewChild, DynamicComponentLoader, ViewContainerRef } from "@angular/core";
import { product } from "./types";

import { ProductDemo } from "./ProductDemo.component";

@Component({
   selector: "demo",
   template: `
     <ul class="tabs vertical" data-tab>
      <li *ngFor='let cmp of components'
          class="tab-title'
          [class.active]='active === cmp">
        <a (click)="choose(cmp)">{{ cmp.name }}</a>
      </li>
    </ul>
    <div class="tabs-content">
      <div #active></div>
    </div>
   `,
})
export class Demo {

  constructor(private dcl: DynamicComponentLoader,  private viewContainerRef: ViewContainerRef) {
    this.components = [
      { name: "product", component: ProductDemo }
    ];
  }

  ngOnInit() {
    this.active = this.components[0];
  }

  ngAfterViewInit() {
    this.dcl.loadNextToLocation(this.active.component, this.viewContainerRef);
  }
}

