import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReferenceService } from './reference.service';

@Injectable({
  providedIn: 'root'
})
export class HttpReferenceService extends ReferenceService {

  constructor(private http: HttpClient) {
    super();
  }

  async save() {
    await super.save();
    const data = await this.http.post('http://localhost:3000/ws/reference', this.ref).toPromise();
    console.log('reference created on back office with success');
  }

}
