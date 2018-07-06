import { UploadFileComponent } from './upload-file/upload-file.component';
import { FormDropdownComponent } from './form-dropdown/form-dropdown.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
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
  declarations: [
    FixTableComponent,
    TreeNodeComponent,
    TreeComponent,
    FormDatepickerComponent,
    FormDropdownComponent,
    UploadFileComponent
  ],
  exports: [
    FixTableComponent,
    TreeNodeComponent,
    TreeComponent,
    FormDatepickerComponent,
    FormDropdownComponent,
    UploadFileComponent
  ]
})
export class FixTableModule { }

//test
