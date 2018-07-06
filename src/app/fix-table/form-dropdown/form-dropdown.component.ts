import { Component, Input, forwardRef, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormDropdownComponent),
  multi: true
};

// export const validateCounterRange: ValidatorFn = (control: AbstractControl):
//   ValidationErrors => {
//   return control.value ?
//     { 'requi': { current: control.value, max: 10, min: 0 } } : null;
// };

// export const EXE_COUNTER_VALIDATOR = {
//   provide: NG_VALIDATORS,
//   useValue: validateCounterRange,
//   multi: true
// };

@Component({
  selector: 'app-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.scss'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class FormDropdownComponent implements ControlValueAccessor {

  itemsShow = false; //是否显示下拉选项
  @Input() items: any[];

  @Input() _dropdownValue: string = '';

  @Output() change = new EventEmitter<string>();

  target: any;
  get dropdownValue() {
    return this._dropdownValue;
  }

  set dropdownValue(value: string) {
    this._dropdownValue = value;
    this.propagateChange(this._dropdownValue);
  }

  writeValue(value: any) {
    if (value) {
      this.dropdownValue = value;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: (_: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {

  }



  /**
   * 显示下拉选项
   * @param e 
   */
  showItems(e: Event) {
    this.itemsShow = !this.itemsShow;
    this.target = e.target;
    //e.stopPropagation(); //停止冒泡
  }

  @HostListener('document:click', ['$event'])
  onclick(e) {
    if(this.target != e.target){
      this.itemsShow = false;
    }
  }

  selectItem(e: Event, item) {
    this.dropdownValue = item.key;
    this.change.emit(this.dropdownValue);
    e.preventDefault();
  }

}


