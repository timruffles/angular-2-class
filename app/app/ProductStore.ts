import { longerStaticProductList } from "./fixtures";
import { product, API_URL } from "./types";
import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";

type oneIndexedPage = number;

@Injectable()
export class ProductStore {
  private byId = new Map<number, product>();

  constructor(
    private http: Http,
    private apiUrl: API_URL
  ) {
    const kvs = longerStaticProductList.map<[number,product]>((p: product) => [p.id, p]);
    this.byId = new Map<number, product>(kvs);
  }

  get(id: number): Promise<product> {
    return Promise.resolve(this.byId.get(id));
  }

  categories(): { name: string, id: string}[] {
    return [{name: "All", id: ""}, { name: "eBooks", id: "ebooks"}, {name:"Products", id: "products"}]
  }

  search(query: { q: string, category?: string, page?: oneIndexedPage }): Observable<product[]> {
    const { q = "", category = "", page = 0 } = query;
    return this.http.get(this.apiUrl + `/products?q=${q}&category=${category}&page=${page}`)
      .map(resp => resp.json())
  }

  all(): Promise<product[]> {
    return Promise.resolve(Array.from(this.byId.values()));
  }
}
