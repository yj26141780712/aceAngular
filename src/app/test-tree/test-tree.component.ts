import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-tree',
  templateUrl: './test-tree.component.html',
  styleUrls: ['./test-tree.component.scss']
})
export class TestTreeComponent implements OnInit {

  nodes: any;
  expandKeys = [];
  checkedKey = [];
  selectedKeys = [];
  constructor() { }

  ngOnInit() {
    this.expandKeys = ['1', '10'];
    this.checkedKey = ['101'];
    //this.selectedKeys =
    this.nodes = [
      {
        title: 'root1',
        key: '1',
        children: [
          {
            title: 'child1',
            key: '10',
            children: [
              {
                title: 'child1.1',
                key: '101'
              },
              {
                title: 'child1.2',
                key: '102'
              }
            ]
          }
        ]
      }
    ]
  }

}
