import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';
import { Stock } from '../interface/stock';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  ref = this.getCurrentRef();
  stock = this.getStock();
  notifier$ = new Observable<any>(observer => {});

  constructor() { }

  async add(ref: Reference) {
    this.setCurrentRef(ref);
    this.stock[this.ref.label] = this.ref;
    this.saveStock();
  }

  setCurrentRef(ref: Reference) {
    this.ref = ref;
    this.saveCurrentRef();
  }

  saveCurrentRef() {
    localStorage.setItem('currentRef', JSON.stringify(this.ref));
  }

  getCurrentRef(): Reference {
    const str = localStorage.getItem('currentRef');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str) as Reference;
  }

  getStock() {
    const str = localStorage.getItem('stock');
    if (!str) {
      return {};
    }
    return JSON.parse(str) as Stock;
  }

  saveStock() {
    localStorage.setItem('stock', JSON.stringify(this.stock));
  }

  hasStock() {
    return Object.values(this.stock).length > 0;
  }

  getStockAsArray() {
    return Object.values(this.stock);
  }

  async deliver(qty: number) {
    this.ref.quantity = (+this.ref.quantity - qty) + '';
    this.saveCurrentRef();
    this.stock[this.ref.label] = this.ref;
    this.saveStock();
  }

  async refresh() {
    // nothing to do.
  }
}
