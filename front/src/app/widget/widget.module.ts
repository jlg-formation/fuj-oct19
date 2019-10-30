import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { AsyncButtonComponent } from './async-button/async-button.component';

@NgModule({
  declarations: [AutofocusDirective, AsyncButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, AsyncButtonComponent]
})
export class WidgetModule { }
