import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

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

    interval(1000).pipe(
      map(x => x + 1),
      startWith(0),
      take(this.duration + 1),
      map(x => this.duration - x),
    ).subscribe({
      next: data => this.counter = data,
      complete: () => this.finished.emit({ msg: 'Tu bosses pas tres vite...' })
    });
  }

}
