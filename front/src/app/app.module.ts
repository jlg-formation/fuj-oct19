import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './route/home/home.component';
import { LegalComponent } from './route/legal/legal.component';
import { ReferenceCreateModule } from './reference-create/reference-create.module';
import { HttpClientModule } from '@angular/common/http';
import { ReferenceService } from './service/reference.service';
import { HttpReferenceService } from './service/http-reference.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    ReferenceCreateModule
  ],
  providers: [
    { provide: ReferenceService, useClass: HttpReferenceService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
