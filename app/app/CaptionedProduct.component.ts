import { ViewChild, ElementRef, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, Renderer, QueryList } from "@angular/core";

@Component({
  selector: "captioned-product",
  template: `
  `,
})
export class CaptionedProduct {
  @ContentChild('caption') caption: ElementRef;
  @ContentChildren('img') img: QueryList<ElementRef>;

  constructor(private renderer: Renderer) {
  }

  ngAfterContentInit() {
    console.log(this);
  }
}
