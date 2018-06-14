import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestTreeComponent } from './test-tree/test-tree.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'testTree', component: TestTreeComponent },
  { path: '**', component: HomeComponent },
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
