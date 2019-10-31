import { Component, OnInit, Input } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {

  @Input() host: string;
  subject$: WebSocketSubject<any>;
  message = '';

  constructor() { }

  ngOnInit() {
    console.log('this.host: ', this.host);
    this.subject$ = webSocket({
      url: 'ws://localhost:3000',
      deserializer: msg => msg
    });
    this.subject$.subscribe(
      msg => {
        console.log('message received: ', msg);
        this.message = msg.data;
      },
      err => console.log(err),
      () => console.log('complete')
    );
  }

}
