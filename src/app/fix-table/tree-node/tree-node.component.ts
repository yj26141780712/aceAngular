import { async } from '@angular/core/testing';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tree } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input() nodes: any;
  ishasChecked = false;
  ishasNoChecked = false;
  @Output() checkEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  check(e, node) {
    this.checkEvent.emit(node);
    if (node.children && node.children.length > 0) {
      this.ishasChecked = false;
      this.hasChecked(node); //判断是否有选中子节点
      console.log(node);
      console.log(this.ishasChecked)
      node.children.forEach(child => {
        this.setChildren(child, !this.ishasChecked);
      });
    } else {
      node.isChecked = !node.isChecked;
    }
  }

  switch(e, node) {
    console.log(node);
    node.isExpanded = !node.isExpanded;
  }

  getIconClass(node) { //?'tree-switcher-open':'tree-switcher-close'
    if (node.children && node.children.length > 0) {
      if (node.isExpanded) {
        return 'tree-switcher-minus'
      } else {
        return 'tree-switcher-add'
      }
    } else {
      return 'tree-switcher-file';
    }
  }

  isExpend(isExpanded) {
    if (isExpanded) {
      return true;
    }
    return false;
  }

  isChecked(node) {
    let indeterminate = "tree-checkbox-indeterminate"; //不全选
    let checked = "tree-checkbox-checked"; //全选
    if (node.children && node.children.length > 0) {
      //判断是否有没有选中节点
      this.ishasNoChecked = false;
      this.ishasChecked = false;
      this.hasNoChecked(node);
      this.hasChecked(node);
      if (!this.ishasNoChecked) {
        return checked;
      } else {
        if (this.ishasChecked) {
          return indeterminate;
        } else {
          return '';
        }
      }
    } else {
      if (node.isChecked) {
        return checked
      } else {
        return '';
      };
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
      if (node.isChecked) this.ishasChecked = true;
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
      if (!node.isChecked) this.ishasNoChecked = true;
    }
  }

  outCheck(e) {
    this.checkEvent.emit(e);
  }

  setChildren(node, checked) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.setChildren(child, checked);
      });
    } else {
      node.isChecked = checked;
    }
  }
}
