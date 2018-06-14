import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input() nodes:any;
  constructor() { }

  ngOnInit() {
    console.log(this.nodes);
  }

}
