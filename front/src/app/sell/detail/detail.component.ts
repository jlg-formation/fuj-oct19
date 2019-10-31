import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/service/reference.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reference } from 'src/app/interface/reference';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  ref: Reference;
  currentQty: number;

  f = new FormGroup({
    qty: new FormControl('1', Validators.required),
  });

  constructor(
    private reference: ReferenceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      await this.reference.refresh();
      this.ref = this.reference.stock[params.label];
      if (!this.ref) {
        return;
      }
      this.currentQty = +this.ref.quantity;
      this.reference.setCurrentRef(this.ref);
    });
  }

  async submit() {
    try {
      console.log('submit');
      await this.reference.deliver(+this.f.value.qty);
      this.router.navigateByUrl('/delivered');
    } catch (err) {
      this.router.navigateByUrl('/error');
    }
  }

}
