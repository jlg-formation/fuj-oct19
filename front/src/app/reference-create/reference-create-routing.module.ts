import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category/category.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  { path: 'reference/creer', component: CreateComponent },
  { path: 'reference/categories', component: CategoryComponent },
  { path: 'reference/succes', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceCreateRoutingModule { }
