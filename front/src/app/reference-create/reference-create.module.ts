import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceCreateRoutingModule } from './reference-create-routing.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    ReferenceCreateRoutingModule
  ]
})
export class ReferenceCreateModule { }
