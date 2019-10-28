import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LayoutComponent, HeaderComponent, BodyComponent, FooterComponent]
})
export class LayoutModule { }
