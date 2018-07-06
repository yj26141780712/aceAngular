import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  testForm: FormGroup;
  items: any[];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.items = [
      { key: '10', value: '我是10' },
      { key: '20', value: '我是20' },
      { key: '50', value: '我是30' },
      { key: '100', value: '我是100' }
    ]
    this.testForm = this.fb.group({
      'test1': ['', Validators.required],
      'test2': ['', Validators.required],
      'test3': ['',],
      'test4': ['',],
    });
  }

  change(e) {

  }

  submit(value) {

  }

}
