import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DBTableComponent } from './dbtable/dbtable.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatListModule} from '@angular/material/list';
import { DBFormComponent } from './dbform/dbform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EditorComponent } from './editor/editor.component'

let routes: Routes = [
  { path: '', component: DBFormComponent },
  { path: 'tables', component: DBTableComponent},
  { path: 'editor', component: EditorComponent}
];


@NgModule({
  declarations: [
    DBTableComponent,
    DBFormComponent,
    HeaderComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
    }
  ],
  bootstrap: [HeaderComponent]  
})
export class AppModule { }
