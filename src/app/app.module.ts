import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DBFormComponent } from './dbform/dbform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbtableComponent } from './dbtable/dbtable.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  entryComponents: [ DbtableComponent ],
  declarations: [
    DBFormComponent,
    DbtableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DBFormComponent]
})
export class AppModule { }
