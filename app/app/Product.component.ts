import { Component, Input, SimpleChange,

  Output, EventEmitter 

} from "@angular/core";
import { product, cartEntry } from "./types";

export type addedEvent = product ;

@Component({
  template: `
    <h1 [title]='product?.name'>{{ product?.name }}</h1>
    <p>{{ product?.description }}</p>
    <p>Quantity: {{ entry ? entry.quantity : 'Loading...' }}</p>
    <button (click)="buy($event)" 
            class='button'
            [disabled]="!entry"
            [class.bought]="entry?.quantity > 0">
      Buy
    </button>
  `,
  styles: [
    `button {
       transition: all 5s;
     }

     button.bought {
       background: green;
     }
    `
  ],
  selector: "product",
})
export class Product {

  @Input() product: product;

  // { quantity: number } - <product [entry]="someEntry">
  @Input() entry: cartEntry;

  // (added)="$event" in templates using this component
  @Output() added = new EventEmitter<addedEvents>();

  buy() {
    this.added.emit(this.product);
  }

  ngOnChanges(ch: SimpleChange) {
    console.log(ch);
  }

}


