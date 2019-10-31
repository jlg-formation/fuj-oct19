import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() duration: number;

  @Output() finished = new EventEmitter<{ msg: string }>();

  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = this.duration;
  }

}
