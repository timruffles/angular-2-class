import { longerStaticProductList } from "./fixtures";
import { product } from "./types";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductStore {
  private byId = new Map<number, product>();

  constructor() {
    const kvs = longerStaticProductList.map<[number,product]>((p: product) => [p.id, p]);
    this.byId = new Map<number, product>(kvs);
  }

  get(id: number): Promise<product> {
    return Promise.resolve(this.byId.get(id));
  }

  all(): Promise<product[]> {
    return Promise.resolve(Array.from(this.byId.values()));
  }
}
