import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FixTableModule } from './fix-table/fix-table.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestTreeComponent } from './test-tree/test-tree.component';
import { JsonTreeComponent } from './json-tree/json-tree.component';
import { TestFormComponent } from './test-form/test-form.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { UploadComponent } from './upload/upload.component';
import { UploadFileComponent } from './fix-table/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TestTreeComponent,
    JsonTreeComponent,
    TestFormComponent,
    ProgressCircleComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
