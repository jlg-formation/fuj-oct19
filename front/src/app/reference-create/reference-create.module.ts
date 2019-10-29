import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReferenceCreateRoutingModule } from './reference-create-routing.module';
import { WidgetModule } from '../widget/widget.module';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category/category.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [CreateComponent, CategoryComponent, SuccessComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ReferenceCreateRoutingModule,
    WidgetModule,
  ],
})
export class ReferenceCreateModule { }
