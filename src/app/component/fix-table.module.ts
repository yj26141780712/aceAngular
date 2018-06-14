import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixTableComponent } from './fix-table/fix-table.component';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [FixTableComponent, TreeComponent, TreeNodeComponent],
  exports: [FixTableComponent,TreeComponent,TreeNodeComponent]
})
export class FixTableModule { }

//test
