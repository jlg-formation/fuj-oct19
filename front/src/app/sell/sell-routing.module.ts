import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DeliveredComponent } from './delivered/delivered.component';


const routes: Routes = [
  { path: 'references', component: ListComponent },
  { path: 'references/:label', component: DetailComponent },
  { path: 'delivered', component: DeliveredComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
