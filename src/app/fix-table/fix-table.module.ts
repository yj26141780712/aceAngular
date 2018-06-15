import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FixTableComponent } from './fix-table/fix-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [FixTableComponent, TreeNodeComponent, TreeComponent],
  exports: [FixTableComponent, TreeNodeComponent, TreeComponent]
})
export class FixTableModule { }

//test
