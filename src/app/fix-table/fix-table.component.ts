import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fix-table',
  templateUrl: './fix-table.component.html',
  styleUrls: ['./fix-table.component.scss']
})
export class FixTableComponent implements OnInit, OnChanges {

  //表宽度
  //固定列宽度 w_gird_fixed 
  //非固定列宽度 w_gird_nofixed
  //表高度
  //表头高度 h_gird_head
  //表身高度 h_gird_body
  //表格实际宽度
  //排序 fa-sort fa-sort-asc fa-sort-desc

  //可增加的功能
  //分页控件
  //表格字体位置 颜色
  //表头高度 多级表头

  //表格
  config: any = {
    h_gird_header: '45px',
    h_gird_body: 'calc(100% - 45px)',
    w_gird_fixed: '',
    w_gird_table: '',
    columns: [
    ]
  }
  @Input() settings: any;
  @Input() source: any[];
  @Output() sortEvent = new EventEmitter<any>();
  scrollTop: number;
  scrollLeft: number;
  sourceShow: any[];
  //分页
  totalItems: number;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  maxSize: number = 10;
  pages = [10, 20, 50, 100];
  isDropup = true;
  constructor(private http: Http, private element: ElementRef) {

  }

  ngOnInit() {
    Object.assign(this.config, this.settings);
    console.log(this.config);
    let w_gird_fixed = 0; //固定列宽度
    let w_gird_table = 0;
    //计算固定和非固定部分宽度
    for (let col of this.config.columns) {
      if (col.fixed) {
        w_gird_fixed += col.width;
      } else {
        w_gird_table += col.width;
      }
    }
    this.config.w_gird_fixed = w_gird_fixed + 'px';
    this.config.w_gird_table = w_gird_table + 'px';
    this.config.h_gird_head = this.config.h_columns + 'px';
  }

  ngOnChanges() {
    if (this.source) {
      let start: number = (this.currentPage - 1) * this.itemsPerPage;
      let end: number = start + this.itemsPerPage;
      this.sourceShow = this.source.slice(start, end);
      this.totalItems = 300;
    }
  }
  /**
   * 滚动条事件
   * @param event 事件对象
   */
  scroll(event) {
    //console.log(event, event.target.scrollTop);
    this.scrollTop = event.target.scrollTop;
    this.scrollLeft = event.target.scrollLeft;
  }

  /**
   * 点击排序
   * @param column 列
   */
  sort(column) {
    let bl_asc = true;
    if (!column.sortType) {
      column.sortType = "fa-sort-asc";
    } else {
      if (column.sortType == "fa-sort-asc") {
        column.sortType = "fa-sort-desc";
        bl_asc = false;
      } else {
        column.sortType = "fa-sort-asc";
      }
    }
    this.sortEvent.emit({ field: column.field, bl_asc: bl_asc });
  }
  //分页
  pageChanged(event) {
    console.log(event);
  }


  clickPageNum(){
    
  }
  /**
   * 选择每页显示数量
   * @param num 每页数量
   */
  selectPageNum(num) {
    this.itemsPerPage = num;
  }
}
