import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { FixTableComponent } from './fix-table/fix-table.component';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { FixTableModule } from './fix-table/fix-table.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FixTableModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]   
})
export class AppModule { }
