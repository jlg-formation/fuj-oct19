import { Component, OnInit } from '@angular/core';
import { faPoo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  faPoo = faPoo;

  constructor() { }

  ngOnInit() {
  }

}
