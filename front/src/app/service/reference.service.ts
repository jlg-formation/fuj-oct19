import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  ref: Reference;

  constructor() { }

  async add(ref: Reference) {
    this.ref = ref;
    await this.save();
  }

  async save() {
    localStorage.setItem('currentRef', JSON.stringify(this.ref));
  }
}
