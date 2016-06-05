import { longerStaticProductList } from "./fixtures";
import { product } from "./types";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductStore {
  private byId = new Map<number, product>();

  constructor() {
    this.byId = new Map<number, product>();

    for(const product of longerStaticProductList) {
      this.byId.set(product.id, product);
    }
  }

  get(id: number): Promise<product> {
    return Promise.resolve(this.byId.get(id));
  }

  all(): Promise<product[]> {
    return Promise.resolve(Array.from(this.byId.values()));
  }
}
