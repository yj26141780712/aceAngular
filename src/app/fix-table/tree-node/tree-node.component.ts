import { async } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input() nodes: any;
  ishasChecked = false;
  ishasNoChecked = false;
  @Input() expandKeys = [];
  @Input() checkedKey = [];
  @Input() selectedKeys = [];
  constructor() { }

  ngOnInit() {

  }

  check(e, node) {

  }

  switch(e, key) {
    let index = this.expandKeys.indexOf(key);
    if (index > -1) {
      this.expandKeys.splice(index, 1);
    } else {
      this.expandKeys.push(key);
    }
  }

  isIndeterminate(node) {

  }

  isExpend(key) {
    if (this.expandKeys.includes(key)) {
      return true;
    }
    return false;
  }

  isChecked(node) {
    let indeterminate = "tree-checkbox-indeterminate";
    let checked = "tree-checkbox-checked";
    if (node.children && node.children.length > 0) {

    } else {
      if (this.checkedKey.includes(node.key)) return checked;
    }


    // if (node.children && node.children.length > 0) {
    //   this.ishasNoChecked = false; //表示节点全选中
    //   this.hasNoChecked(node);
    //   if (!this.ishasNoChecked) return checked;
    //   this.ishasChecked = false;
    //   this.hasChecked(node);
    //   if (this.ishasChecked) return indeterminate;
    // } else {
    //   if (node.isChecked) return checked;
    // }
    // return "";
  }

  /**
   * 变更子节点选中
   * @param node 节点
   * @param bl 是否选中
   */
  updateChildren(node, bl) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        if (child.children && child.children.length > 0) {
          this.updateChildren(child, bl);
        } else {
          let index = this.checkedKey.indexOf(node.key);
          if (bl) {
            if (index < 0)
              this.checkedKey.push(node.key);
          } else {
            if (index > -1) {
              this.checkedKey.splice(index, 1);
            }
          }
        }
      });
    }
  }

  /**
   * 判读该节点是否有选中子节点
   * @param node 节点
   */
  hasChecked(node) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.hasChecked(child);
      });
    } else {
      if (this.checkedKey.includes(node.key)) this.ishasChecked = true;
    }
  }

  /**
   * 判断该节点是否有没选中子节点
   * @param node 节点
   */
  hasNoChecked(node) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.hasNoChecked(child);
      });
    } else {
      if (!this.checkedKey.includes(node.key)) this.ishasNoChecked = true;
    }
  }
}
