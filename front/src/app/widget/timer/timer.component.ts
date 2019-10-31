import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() duration: number;

  @Output() finished = new EventEmitter<{ msg: string }>();

  counter$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.counter$ = interval(1000).pipe(
      map(x => x + 1),
      startWith(0),
      take(this.duration + 1),
      map(x => this.duration - x),
      map(x => {
        if (x === 0) {
          this.finished.emit({msg: 'Tu bosses pas vite...'})
        }
        console.log('x', x);
        return x;
      }),
    );

  }

}
