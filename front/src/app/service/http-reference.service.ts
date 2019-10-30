import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReferenceService } from './reference.service';
import { Stock } from '../interface/stock';
import { Reference } from '../interface/reference';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpReferenceService extends ReferenceService {

  constructor(private http: HttpClient, private router: Router) {
    super();
    this.getStockFromServer();
  }

  async add(ref: Reference) {
    super.add(ref);
    const data = await this.http.post('http://localhost:3000/ws/reference', ref).toPromise();
    console.log('reference created on back office with success');
  }

  async getStockFromServer() {
    try {
      const references = await this.http.get<Reference[]>('http://localhost:3000/ws/reference').toPromise();
      this.stock = references.reduce((acc, ref) => {
        acc[ref.label] = ref;
        return acc;
      }, {} as Stock);
      this.saveStock();
    } catch (err) {
      console.error('error', err);
      this.router.navigateByUrl('/error');
    }
  }

  async deliver(qty: number) {
    await super.deliver(qty);
    await this.http.put(`http://localhost:3000/ws/reference/${this.ref._id}`, this.ref).toPromise();
    console.log('successfully delivered on http');
  }

}
