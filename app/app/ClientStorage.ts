import { Injectable } from "@angular/core";

@Injectable()
export class ClientStorage {

  get(key: string, valueIfMissing?: any): any {
    return key in localStorage ? JSON.parse(localStorage[key]) : valueIfMissing;
  }

  set(key: string, value: any): void {
    localStorage[key] = JSON.stringify(value);
  }
}
