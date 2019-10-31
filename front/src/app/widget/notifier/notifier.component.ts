import { Component, OnInit, Input } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ReferenceService } from 'src/app/service/reference.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {

  @Input() host: string;
  message = '';

  constructor(private reference: ReferenceService) { }

  ngOnInit() {
    this.reference.notifier$.subscribe(
      msg => {
        console.log('message received: ', msg);
        this.message = msg.data;
      },
      err => console.log(err),
      () => console.log('complete')
    );

  }

}
