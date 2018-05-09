import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
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
  totalPages: number = 1;
  itemsPerPage: number = 20;
  maxSize: number = 10;
  pageNums = [10, 20, 50, 100];
  pages = [];
  inputPage: string;
  isShow = false;
  disabled = false;
  constructor(private http: Http) {

  }

  ngOnInit() {
    //固定列宽度
    let w_gird_fixed = 0;
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
  }

  ngOnChanges() {
    if (this.settings) {
      Object.assign(this.config, this.settings);
    }
    this.databind();
    this.pageChange();
  }

  /**
   * 数据输入初始化绑定
   */
  databind(isSelectPage?) {
    if (this.source) {
      if (!isSelectPage) {
        this.currentPage = 1; //初始化
        this.inputPage = "1";
      }
      this.totalItems = this.source.length;
      this.totalPages = parseInt((this.totalItems / this.itemsPerPage).toString()) + (this.totalItems % this.itemsPerPage > 0 ? 1 : 0);
      let start: number = (this.currentPage - 1) * this.itemsPerPage;
      let end: number = start + this.itemsPerPage;
      this.sourceShow = this.source.slice(start, end);
    }
  }

  /**
   * 分页数据显示
   */
  pageChange() {
    this.pages = [];
    for (let i = 0; i < this.totalPages && i < 10; i++) {
      this.pages.push({ text: (i + 1) + '', number: i + 1, active: i == 0 });
    }
  }
  /**
   * 滚动条事件
   * @param event 事件对象
   */
  scroll(event) {
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

  /**
   * 选择要显示第几页
   * @param num 要显示的页码数
   * @param event 选择当前页的事件对象 
   */
  selectPage(num: Number, event?: Event) {
    num = Number(num);
    if (num < 0) {
      num = 1;
    }
    if (num > this.totalPages) {
      num = this.totalPages;
    }
    this.currentPage = Number(num);
    this.inputPage = num.toString();
    for (let pg of this.pages) {
      if (pg.number == num) {
        pg.active = true;
      } else {
        pg.active = false;
      }
    }
    this.databind(true);
    return false;
  }

  /**
   * 页码输入事件
   * @param event 事件对象
   */
  keydown(event) {
    if (event.keyCode == 13) {
      this.selectPage(event.target.value);
    }
  }
  /**
   * 判断上一页和首页是否有效
   */
  noPrevious() {
    return this.currentPage <= 1;
  }

  /**
   * 判断下一页和尾页是否有效
   */
  noNext() {
    return this.currentPage >= this.totalPages;
  }
  /**
   * 页数选择按钮点击事件
   * @param event 
   */
  clickPageNum(event) {
    this.isShow = !this.isShow;
    event.stopPropagation();
  }
  /**
   * 选择每页显示数量
   * @param num 每页数量
   */
  selectPageNum(event) {
    this.isShow = !this.isShow;
    this.itemsPerPage = Number(event.target.text);
    this.totalPages = parseInt((this.totalItems / this.itemsPerPage).toString()) + (this.totalItems % this.itemsPerPage > 0 ? 1 : 0);
    this.pageChange();
    this.databind();
    return false;
  }

  /** 
   * 监听document click事件
  */
  @HostListener('document:click', ['$event'])
  onclick(event) {
    this.isShow = false;
  }
}
