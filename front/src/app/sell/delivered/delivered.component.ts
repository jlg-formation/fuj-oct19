import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { ReferenceService } from 'src/app/service/reference.service';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {

  faThumbsUp = faThumbsUp;

  ref = this.reference.ref;

  constructor(private reference: ReferenceService) { }

  ngOnInit() {

  }

}
