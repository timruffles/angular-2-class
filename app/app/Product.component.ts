import { Input, Output, Component, EventEmitter } from "@angular/core";
import { product, cartEntry } from "./types";

export const event = {type: "addToCart"};

@Component({
   selector: "product",
   template: `
    <h2>{{ product.name }}</h2> 
    <p>{{ product.description }}</p>

    <p><em>In cart:</em> {{ quantity }}</p>
    <button class='button'
            [disabled]="cartEntry?.pending"
            [class.pending]="cartEntry?.pending"
            (click)="purchase()"
      >
      {{ buttonText() }}
    </button>

    <div *ngIf="error"
        class="alert-box warning"
        >
      {{ error.message }}
    </div>
   `,
})
export class Product {
  quantity = 0;

  @Input() product: product;
  @Input() cartEntry: cartEntry;
  @Input() error: { message: string };
  @Output() command = new EventEmitter<event>();

  purchase() {
    this.command.emit({ type: "addToCart" });
  }

  buttonText() {
    return this.cartEntry.pending ? "Adding..." : "Add to cart";
  }
}

