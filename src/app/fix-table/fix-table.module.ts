import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixTableComponent } from './fix-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [FixTableComponent],
  exports: [FixTableComponent]
})
export class FixTableModule { }

//test
