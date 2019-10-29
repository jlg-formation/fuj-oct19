import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  faSmile = faSmile;

  constructor() { }

  ngOnInit() {
  }

}
