import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-async-button',
  templateUrl: './async-button.component.html',
  styleUrls: ['./async-button.component.scss']
})
export class AsyncButtonComponent implements OnInit, AfterContentInit, AfterViewInit {



  @ContentChild('asyncBtn', { static: false }) button: ElementRef;
  @ViewChild('buttonTrace', { static: false }) buttonTrace: ElementRef;
  @ViewChild('bigBar', { static: false }) bigBar: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar: ElementRef;
  @ViewChild('submitButton', { static: false }) submitButton: ElementRef;

  state = 'ready';

  constructor() { }

  ngOnInit() {
    console.log('button: ', this.button);
  }

  ngAfterContentInit(): void {
    console.log('button: ', this.button);

    const btn = (this.button.nativeElement as HTMLElement);
    btn.addEventListener('click', evt => {
      console.log('evt: ', evt);

      const submitBtn = this.submitButton.nativeElement as HTMLElement;
      submitBtn.click();


      const { width, height } = btn.getBoundingClientRect();
      this.state = 'progress';
      console.log('btn.style.height: ', width, height);

      timer(20).subscribe(x => {
        const buttonTraceDiv = this.buttonTrace.nativeElement as HTMLElement;
        buttonTraceDiv.style.height = height + 'px';
        buttonTraceDiv.style.width = width + 'px';
        buttonTraceDiv.classList.add('start');

      });

    });


  }

  ngAfterViewInit(): void {
    console.log('bigBar: ', this.bigBar);
    console.log('progressBar: ', this.progressBar);

  }





}
