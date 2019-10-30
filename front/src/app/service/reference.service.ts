import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';
import { Stock } from '../interface/stock';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  ref = this.getCurrentRef();
  stock: Stock;

  constructor() {
    (async () => {
      this.stock = await this.getStock();
    })();
  }

  async add(ref: Reference) {
    this.ref = ref;
    this.stock[this.ref.label] = this.ref;
    await this.save();
  }

  async save() {
    localStorage.setItem('currentRef', JSON.stringify(this.ref));
    localStorage.setItem('stock', JSON.stringify(this.stock));
  }

  getCurrentRef(): Reference {
    const str = localStorage.getItem('currentRef');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str) as Reference;
  }

  async getStock(): Promise<Stock> {
    const str = localStorage.getItem('stock');
    if (!str) {
      return {};
    }
    return JSON.parse(str) as Stock;
  }

  hasStock() {
    return Object.values(this.stock).length > 0;
  }
}
