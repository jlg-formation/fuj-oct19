import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  ref: Reference;

  constructor() { }

  add(ref: Reference) {
    this.ref = ref;
    this.save();
  }

  save() {
    localStorage.setItem('currentRef', JSON.stringify(this.ref));
  }
}
