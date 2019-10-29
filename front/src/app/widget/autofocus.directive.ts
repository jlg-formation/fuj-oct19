import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private elt: ElementRef) {
    console.log('directive instantiated');
  }

  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }



}
