import { Injectable } from "@angular/core";
import { product, cartEntry } from "./types"
import { ClientStorage } from "./ClientStorage";
import { ProductStore } from "./ProductStore";

export type checkoutItem  = cartEntry & product & {
  subTotal: number;
};
export type checkoutState = { items: checkoutItem[], total: number };

@Injectable()
export class Cart {

  public entries = new Map<number, CartEntry>();

  constructor(private storage: ClientStorage,
    private store: ProductStore) {
    this.loadFromStorage()
  }

  checkoutState(): Promise<checkoutState> {
    const entries = Array.from(this.entries.entries())
      .map(([productId, entry])  => {
        return this.store.get(productId)
          .then(product => {
            return Object.assign({
              subTotal: entry.quantity * product.price,
            }, product, entry);
          })
      });

    return Promise.all(entries)
      .then((cItems): checkoutState => {
        const items: checkoutItem[] = <any>cItems;
        const total = items.reduce<number>((sum: number, item: checkoutItem): number => sum + item.subTotal, 0);
        return { items, total };
      });
  }

  get(productId: number): Promise<cartEntry> {
    const value = this.entries.get(productId) || new CartEntry;
    console.log(value);
    return Promise.resolve(value);
  }

  add(productId: number): Promise<cartEntry> {
    if(!this.entries.has(productId)) {
      this.entries.set(productId, new CartEntry())
    }

    const newEntry = this.entries.get(productId).add(1);
    this.entries.set(productId, newEntry);

    this.changed();

    return new Promise((resolve) => {
      setTimeout(() => resolve(newEntry), 450);
    });
  }

  private changed() {
    // no need to do this right now, we can leave till later. ideally
    // we would debounce + use `window.requestIdle`
    setTimeout(() => this.storage.set('cartEntries', this))
  }

  private loadFromStorage() {
    const entries = this.storage.get("cartEntries", {});
    for(const id in entries) {
      this.entries.set(Number(id), new CartEntry(entries[id].quantity));
    }
  }

  private toJSON() {
    const lookup = {};
    for(const [k,v] of Array.from(this.entries.entries())) {
      lookup[k] = v;
    }
    return lookup;
  }
}

class CartEntry {
  constructor(
    public quantity = 0
  ) {
  }

  add(n: number) {
    return new CartEntry(this.quantity + n);
  }
}
