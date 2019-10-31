import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { AsyncButtonComponent } from './async-button/async-button.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [AutofocusDirective, AsyncButtonComponent, TimerComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, AsyncButtonComponent, TimerComponent]
})
export class WidgetModule { }
