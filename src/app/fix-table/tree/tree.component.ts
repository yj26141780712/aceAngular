import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() nodes: any;
  @Input() expandKeys = [];
  @Input() checkedKey = [];
  @Output() checkChange = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {

  }

  outCheck(e) {
    this.checkChange.emit(e);
  }

}
