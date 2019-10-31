import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { AsyncButtonComponent } from './async-button/async-button.component';
import { TimerComponent } from './timer/timer.component';
import { TimerFormatPipe } from './timer-format.pipe';
import { NotifierComponent } from './notifier/notifier.component';

@NgModule({
  declarations: [AutofocusDirective, AsyncButtonComponent, TimerComponent, TimerFormatPipe, NotifierComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, AsyncButtonComponent, TimerComponent, TimerFormatPipe, NotifierComponent]
})
export class WidgetModule { }
