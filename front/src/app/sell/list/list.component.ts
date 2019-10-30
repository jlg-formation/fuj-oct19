import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/service/reference.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public reference: ReferenceService) { }

  ngOnInit() {
  }

}
