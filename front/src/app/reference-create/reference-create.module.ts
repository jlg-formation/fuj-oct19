import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReferenceCreateRoutingModule } from './reference-create-routing.module';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category/category.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [CreateComponent, CategoryComponent, SuccessComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReferenceCreateRoutingModule
  ]
})
export class ReferenceCreateModule { }
