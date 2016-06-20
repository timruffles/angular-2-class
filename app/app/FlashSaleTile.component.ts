import { Component, Input, ElementRef, SimpleChanges } from "@angular/core";

@Component({
  selector: "flash-sale-item",
  host: {
    "[class.dropped]": "dropped",
    "[class.changed]": "changed",
  },
  template: `
  `,
})
export class FlashSaleTile {
  @Input() saleItem: any;

  dropped = false;
  changed = true;

  ngOnChanges(ch: SimpleChanges) {
    const item = ch.saleItem;
    this.changed = true;
    setTimeout(() => {
      this.changed = false;
    }, 100);

    if(item && item.previousValue.price > item.currentValue.price) {
      console.log("dropped");
      this.dropped = true;
      setTimeout(() => {
        this.dropped = false;
      }, 250)
    }
  }
}
