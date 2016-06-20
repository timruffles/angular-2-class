import { Component, Input, ElementRef, SimpleChanges } from "@angular/core";

import { FlashSaleTile } from "./FlashSaleTile.component";

@Component({
  selector: "flash-sales",
  directives: [FlashSaleTile],
  template: `
    <flash-sale-item *ngFor='let item of items'
      [saleItem]='item'
      >
    </flash-sale-item>
  `,
})
export class FlashSales {
  items : {price: number}[] = [];

  constructor() {
    this.items = Array.from({ length: 50 }, () => {
      return { price: Math.random() * 250 | 0 };
    })

  }

  ngAfterViewInit() {
    const loop = () => {
      const index = Math.random() * this.items.length | 0;
      const item = this.items[index];
      const oringinalPrice = item.price;
      this.items[index] = Object.assign({}, item, {
        price: oringinalPrice * 0.9,
      });

      setTimeout(() => {
        this.items[index] = item;
        loop();
      }, 100);
    };

    loop();
  }
}
