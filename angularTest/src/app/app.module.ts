import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPipeModule,
    FormsModule,
    NgbModule,
    HttpClientModule,

    ReactiveFormsModule,
   
   
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
