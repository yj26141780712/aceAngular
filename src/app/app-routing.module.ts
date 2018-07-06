import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestTreeComponent } from './test-tree/test-tree.component';
import { JsonTreeComponent } from './json-tree/json-tree.component';
import { TestFormComponent } from './test-form/test-form.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tree', component: TestTreeComponent },
  { path: 'jsontree', component: JsonTreeComponent },
  { path: 'testform', component: TestFormComponent },
  { path: 'progress', component: ProgressCircleComponent },
  { path: '**', component: UploadComponent   }, 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { } 
