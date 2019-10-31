import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { AsyncButtonComponent } from './async-button/async-button.component';
import { TimerComponent } from './timer/timer.component';
import { TimerFormatPipe } from './timer-format.pipe';

@NgModule({
  declarations: [AutofocusDirective, AsyncButtonComponent, TimerComponent, TimerFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, AsyncButtonComponent, TimerComponent, TimerFormatPipe]
})
export class WidgetModule { }
