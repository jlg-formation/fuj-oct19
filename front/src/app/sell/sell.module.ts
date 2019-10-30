import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    SellRoutingModule
  ]
})
export class SellModule { }
