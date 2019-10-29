import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/reference/succes');
  }

}
