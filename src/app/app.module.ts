import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DBFormComponent } from './dbform/dbform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbtableComponent } from './dbtable/dbtable.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatListModule} from '@angular/material/list';

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
    HttpClientModule,
    MatListModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [DBFormComponent]
})
export class AppModule { }
