import { Injectable } from "@angular/core";
import { product, cartEntry } from "./types"
import { ClientStorage } from "./ClientStorage";

@Injectable()
export class Cart {

  entries = new Map<number, cartEntry>();

  constructor(private storage: ClientStorage) {
    const entryJson = this.fromStorage()
  }

  get(productId: number): Promise<cartEntry> {
    return Promise.resolve(this.entries.get(productId) || new CartEntry);
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

  private fromStorage() {
    const entries = this.storage.get("cartEntries", {});
    for(const id in entries) {
      this.entries.set(id, entries[id]);
    }
  }

  private toJSON() {
    const lookup = {};
    for(const [k,v] of this.entries.entries()) {
      lookup[k] = v;
    }
    return lookup;
  }
}

class CartEntry {
  constructor(
    public quantity = 0,
  ) {
  }

  add(n: number) {
    return new CartEntry(this.quantity + n);
  }
}
