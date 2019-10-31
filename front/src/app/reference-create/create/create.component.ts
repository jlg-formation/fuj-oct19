import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReferenceService } from 'src/app/service/reference.service';
import { Reference } from 'src/app/interface/reference';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Pelle', Validators.required),
    category: new FormControl('Outils', Validators.required),
    quantity: new FormControl('34', Validators.required),
    price: new FormControl(''),
  });

  constructor(
    private router: Router,
    private reference: ReferenceService,
  ) { }

  ngOnInit() {
  }

  async submit() {
    console.log('submit');
    try {
      await this.reference.add(this.f.value as Reference);
      this.router.navigateByUrl('/reference/succes');
    } catch (err) {
      this.router.navigateByUrl('/error');
    }
  }

  warnUser(event: { msg: string }) {
    alert('Timeout !' + event.msg);
  }

}
