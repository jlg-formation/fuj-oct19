import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/service/reference.service';
import { ActivatedRoute } from '@angular/router';
import { Reference } from 'src/app/interface/reference';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  ref: Reference;
  constructor(private reference: ReferenceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.ref = this.reference.stock[params.label];
    });
  }

}
