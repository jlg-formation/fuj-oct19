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

  save() {
    super.save();
    this.http.post('http://localhost:3000/ws/reference', this.ref).subscribe(
      data => {
        console.log('reference created on back office with success');
      },
      err => console.error('error', err)
    );
  }

}
