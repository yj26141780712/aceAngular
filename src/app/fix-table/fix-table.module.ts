import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixTableComponent } from './fix-table.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [FixTableComponent],
  exports: [FixTableComponent]
})
export class FixTableModule { }
