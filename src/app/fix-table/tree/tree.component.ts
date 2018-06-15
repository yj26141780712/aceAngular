import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() nodes: any;
  @Input() expandKeys = [];
  @Input() checkedKey = [];
  @Input() selectedKeys = [];
  constructor() { }
  ngOnInit() {
    
  }

}
