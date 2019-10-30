import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WidgetModule,
    SellRoutingModule
  ]
})
export class SellModule { }
