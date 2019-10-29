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
    label: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    price: new FormControl(''),
  });

  constructor(
    private router: Router,
    private reference: ReferenceService,
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    this.reference.add(this.f.value as Reference);
    this.router.navigateByUrl('/reference/succes');
  }

}
