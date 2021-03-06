import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fix-table',
  templateUrl: './fix-table.component.html',
  styleUrls: ['./fix-table.component.scss']
})
export class FixTableComponent implements OnInit, OnChanges {

  //表宽度
  //固定列宽度 wGirdFixed 
  //非固定列宽度 wGird_nofixed
  //表高度
  //表头高度 hGirdHead
  //表身高度 hGirdBody
  //表格实际宽度
  //排序 fa-sort fa-sort-asc fa-sort-desc

  //可增加的功能
  //表格字体位置 颜色
  //表头高度 多级表头 动态记载列 
  //表格 增删该查
  //列宽变更功能

  //表格 默认配置
  config: any = {
    headTrHeight: 45,
    bodyTrHeight: 30,
    isShowFunction: true,
    isShowCheck: true, //是否显示
    isShowSearch: true,
    isShowPage: true,
    isShowTool: true,
    columns: [
    ],
    rowOperations: [
    ],
    toolOperations: [
    ]
  }

  hGirdSearch = '45px'; //搜索框高度
  hGirdTool = '32px';
  hGirdPage = '45px'; //分页高度
  hGirdView = 'calc(100% - 90px)'; //表格高度
  hGirdHeader = '25px'; //表头高度
  hGirdBody = 'calc(100% - 40px)'; //表身显示高度
  hGirdHeaderTr = '40px'; //表头tr高度
  hGirdBodyTr = '40px'; //表身tr高度
  wGirdFixed = ''; //固定列总宽度
  wGirdTable = ''; //非固定列总宽度
  wCheckbox = 50; // 勾选列宽度
  isfixed: boolean = false; //是否存在固定列
  isfunction: boolean = true; //是否显示功能列
  isShowTool: boolean = false; //是否显示工具栏
  isShowCheck: boolean = true;
  iHover = 0;
  w_op = 30; // 工作操作区宽度
  showColumns: any[] = [];
  isSettingsShow = false;
  isColumnsShow = false;

  @ViewChild('datagird') datagird: ElementRef;
  gwidth: number;
  @Input() settings: any;
  @Input() source: Array<any> = [];
  @Output() sortEvent = new EventEmitter<any>();
  @Output() selectEvent = new EventEmitter<any>();

  @Output() rowOperationEvent = new EventEmitter<any>();
  @Output() toolOprationeEvent = new EventEmitter<any>();

  scrollTop: number;
  scrollLeft: number;

  //分页
  sourceShow: Array<any> = [];
  checkedIndex: Array<number> = [];
  totalItems: number;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 20;
  beginNum: number = 1;
  endNum: number = 1;
  maxSize: number = 10;
  pageNums = [10, 20, 50, 100];
  pages = [];
  inputPage: string;
  isPageSelectShow = false;

  //搜索
  sourceSearch: Array<any> = [];
  searchInput: string = '';

  constructor() {

  }

  ngOnInit() {


  }

  ngOnChanges() {
    if (this.settings) Object.assign(this.config, this.settings); //配置用户设置
    this.gwidth = this.datagird && this.datagird.nativeElement.clientWidth;
    this.datagird.nativeElement
    this.isShowCheck = this.settings.isShowCheck !== false;
    this.isfunction = this.settings.isShowFunction !== false;
    this.isShowTool = this.settings.isShowTool !== false;
    this.SetShowColumns();
    this.tableInit();
    this.databind(true, true);
    this.pageChange();
  }

  /*-------------------------------------表格-----------------------------------*/

  /**
   * 表格初始化
   */
  tableInit() {
    let wGirdFixed = 0;
    let wGirdTable = 0;
    //计算固定和非固定部分宽度
    this.isfixed = false;
    for (let col of this.showColumns) {
      col.width = col.width || 100; //用户没有传入width时 默认100
      if (col.fixed) {
        wGirdFixed += col.width;
        this.isfixed = true;
      } else {
        wGirdTable += col.width;
      }
    }

    if (this.config.rowOperations.length > 0) {
      this.w_op = 30;
      this.config.rowOperations.forEach(() => {
        this.w_op += 20;
      })
    } else {
      this.w_op = 30;
    }
    let wCf = this.wCheckbox + (this.isfunction ? this.w_op : 0) //选择列和功能区的宽度

    //当table设置宽度不足容器宽度时自动补全宽度
    if (this.gwidth && this.gwidth > wGirdFixed + wGirdTable + wCf) {
      let w_dif = this.gwidth - wGirdFixed - wGirdTable - wCf - 20; //20 去掉纵向滚动条宽度 避免产生宽度过长产生横向滚动条
      let every = w_dif / this.showColumns.length; //每个标题列应该增加的宽度
      this.showColumns.forEach(col => {
        col.width = col.width + every;
        if (col.fixed) {
          wGirdFixed += every;
        } else {
          wGirdTable += every;
        }
      });
    }
    //计算高度
    this.hGirdBodyTr = `${this.config.bodyTrHeight}px`;
    this.hGirdBody = `calc(100% - ${this.config.headTrHeight}px)`;
    this.hGirdHeaderTr = `${this.config.headTrHeight}px`;
    this.hGirdHeader = `${this.config.headTrHeight}px`; // 多级表头时需要重新计算 
    //计算宽度
    this.wGirdFixed = (wGirdFixed + (this.isfixed ? wCf : 0)) + 'px';
    this.wGirdTable = (wGirdTable + (this.isfixed ? 0 : wCf)) + 'px';
    // let reg = new RegExp(/^[0-9]+%$/);
    // this.wGirdTable = reg.test(this.config.width) ? this.config.width : this.wGirdTable;
    // this.wGird2InnerHeader = reg.test(this.config.width) ? this.config.width : this.wGird2InnerHeader;
    let hReduce = 0;
    if (this.isShowTool) hReduce += 32;
    if (this.config.isShowSearch) hReduce += 45;
    if (this.config.isShowPage) hReduce += 45;
    this.hGirdView = `calc(100% - ${hReduce}px)`;
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
    if (column.sortType == "fa-sort-asc") {
      column.sortType = "fa-sort-desc";
    } else {
      column.sortType = "fa-sort-asc";
    }
    if (this.sortEvent.observers.length > 0) { //使用自定义排序 接口返回排序字段和排序方式（asc:true 升序）
      this.sortEvent.emit({ field: column.field, asc: column.sortType == "fa-sort-asc" });
      this.search(this.searchInput);
    } else {
      this.source.sort((a, b) => {
        if (a[column.field] <= b[column.field]) {
          return column.sortType == "fa-sort-asc" ? 1 : -1;
        }
        if (a[column.field] > b[column.field]) {
          return column.sortType == "fa-sort-asc" ? -1 : 1;
        }
      });
      this.search(this.searchInput);
    }
    this.databind(true);
    this.pageChange();
  }

  /**
   * 行选择
   * @param checked  false 全反选 true 全选
   */
  selectAllRow(checked) {
    this.checkedIndex = [];
    if (checked) {
      this.sourceShow.forEach((p, i) => this.checkedIndex.push(i));
    }
    this.selectBack();
  }

  /**
   * 行选择事件
   * @param checked false 取消选中 true 选中
   * @param i this.sourceShow行索引
   */
  selectOneRow(event, i) {
    if (event.target.checked) {
      this.checkedIndex.push(i);
      this.checkedIndex.sort((a, b) => a > b ? 1 : -1);
    } else {
      this.checkedIndex = this.checkedIndex.filter(p => p != i).sort((a, b) => a > b ? 1 : -1);
    }
    this.selectBack();
    event.stopPropagation();
  }

  /**
   * 行点击事件 选中或取消选中
   * @param i this.sourceShow显示行索引
   */
  selectTr(i) {
    if (this.checkedIndex.indexOf(i) < 0) {
      this.checkedIndex.push(i);
      this.checkedIndex.sort((a, b) => a > b ? 1 : -1);
    } else {
      this.checkedIndex = this.checkedIndex.filter(p => p != i).sort((a, b) => a > b ? 1 : -1);
    }
    this.selectBack();
  }

  /**
   * 选中行回调事件
   */
  selectBack() {
    let arr = [];
    this.checkedIndex.forEach(i => arr.push(this.sourceShow[i]));
    this.selectEvent.emit(arr);
  }

  /**
   * 判断是都全选
   */
  isAllCheck() {
    if (this.checkedIndex.length > 0 && this.checkedIndex.length == this.sourceShow.length) return true;
    return false;
  }

  /**
   * 判断行是否选中
   * @param index this.sourceShow显示行索引
   */
  isCheck(index) {
    if (this.checkedIndex.length > 0) {
      if (this.checkedIndex.indexOf(index) > -1) return true;
    }
    return false;
  }

  /**
   * 数据绑定 
   * @param isInit true 初始化 false 数据重新绑定
   * @param isSearch 
   */
  databind(isResetPage?, isInit?) {
    if (isResetPage) {
      this.currentPage = 1; //初始化
      this.inputPage = this.currentPage + '';
    }
    if (isInit) {
      if (this.source) {
        this.sourceSearch = this.source;
      } else {
        this.sourceSearch = []
      }
    }
    this.totalItems = this.sourceSearch.length;
    this.totalPages = parseInt((this.totalItems / this.itemsPerPage).toString()) + (this.totalItems % this.itemsPerPage > 0 ? 1 : 0);
    let start: number = (this.currentPage - 1) * this.itemsPerPage;
    let end: number = start + this.itemsPerPage;
    this.sourceShow = this.sourceSearch.slice(start, end);
    this.beginNum = start + 1;
    this.endNum = start + this.sourceShow.length;
    this.checkedIndex = [];
  }


  /**
   * 功能区点击事件
   * @param op 操作事件对象
   */
  opClick(event: Event, op, item) {
    event.stopPropagation();
    op.callBack(item);
    //this.rowOperationEvent.emit(op);
    return false;
  }

  mouseoverTr(i) {
    this.iHover = i;
  }

  mouseoutTr(i) {
    this.iHover = 0;
  }

  /**
   * 设置显示列
   */
  SetShowColumns() {
    let arr = [];
    this.settings.columns.forEach(obj => {
      obj.show = obj.show === undefined || obj.show ? true : false;
      if (obj.show) {
        let newObj = Object.assign({}, obj);
        arr.push(newObj);
      }
    });
    console.log(arr);
    this.showColumns = [].concat(arr);
  }

  /*-------------------------------------分页-----------------------------------*/

  /**
   * 分页页码显示
   */
  pageChange() {
    // let numStart = 1;
    // let numEnd = 11;  //扩展 使用maxSize+1
    // if (isInit || this.currentPage <= 6) {  
    //   numEnd = this.totalPages >= numEnd - 1 ? numEnd : this.totalPages + 1;
    // } else if (this.currentPage > 6 && (this.totalPages - this.currentPage) > 3) {
    //   numStart = this.currentPage - 5;
    //   numEnd = this.currentPage + 5;
    // } else if ((this.totalPages - this.currentPage) <= 3) {
    //   numStart = this.totalPages - 9;
    //   numEnd = this.totalPages + 1;
    // }
    // if (isInit) {
    //   this.currentPage = 1
    //   this.inputPage = this.currentPage + '';
    // };
    let numStart = 1;
    let numEnd = this.maxSize + 1;  //扩展 使用maxSize+1   10
    let numleft = parseInt((this.maxSize / 2).toString()) + 1;
    let numRight = this.maxSize - numleft - 1;
    if (this.currentPage <= numleft) {
      numEnd = this.totalPages >= numEnd - 1 ? numEnd : this.totalPages + 1;
    } else if (this.currentPage > numleft && (this.totalPages - this.currentPage) > numRight) {
      numStart = this.currentPage - (numleft - 1);
      numEnd = this.currentPage + (this.maxSize - numleft + 1);
    } else if ((this.totalPages - this.currentPage) <= numRight) {
      numStart = this.totalPages - (this.maxSize - 1);
      numStart = numStart < 1 ? 1 : numStart;
      numEnd = this.totalPages + 1;
    }
    this.pages = [];
    for (let i = numStart; i < numEnd; i++) {
      this.pages.push({ text: i + '', number: i, active: i == this.currentPage });
    }
  }
  /**
   * 选择要显示第几页 
   * @param num 要显示的页码数
   * @param event 选择当前页的事件对象 
   */
  selectPage(num: Number, event?: Event) {
    this.currentPage = this.limitPageNum(num); //页数超出最大页显示最大页
    this.inputPage = this.currentPage.toString();
    this.databind();
    this.pageChange();
    return false;
  }

  /**
   * 页面显示不会超过最大值
   * @param num 当前选择页数
   */
  limitPageNum(num) {
    num = Number(num);
    if (num <= 0) num = 1;
    if (num > this.totalPages) num = this.totalPages;
    return Number(num);
  }

  /**
   * 设置当前active页
   */
  activePage() {
    this.pages.forEach(p => p.active = p.number == this.currentPage);
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
  keypress(event) {
    return event.keyCode >= 48 && event.keyCode <= 57
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
    this.isPageSelectShow = !this.isPageSelectShow;
    event.stopPropagation();
  }
  /**
   * 选择每页显示数量
   * @param num 每页数量
   */
  selectPageNum(event) {
    this.isPageSelectShow = !this.isPageSelectShow;
    this.itemsPerPage = Number(event.target.text);
    // this.totalPages = parseInt((this.totalItems / this.itemsPerPage).toString()) + (this.totalItems % this.itemsPerPage > 0 ? 1 : 0);
    this.databind(true);
    this.pageChange();
    return false;
  }

  /** 
   * 监听document click事件
  */
  @HostListener('document:click', ['$event'])
  onclick(event) {
    this.isPageSelectShow = false;
    this.isSettingsShow = false;
  }

  /*-------------------------------------搜索-----------------------------------*/
  /**
   * 搜素输入框keydown事件
   * @param event 事件对象
   */
  searchEvent(event) {
    if (event.type == "keydown" && event.keyCode == 13) {
      this.search(event.target.value);
    }
    if (event.type == "blur") {
      this.search(event.target.value);
    }
  }

  /**
   * 搜索功能函数
   * @param value 搜索输入框值 
   */
  search(value) {
    //this.sourceSearch = this.source.filter(item => item["mId"].indexOf(value.trim()) > -1);
    if (value.length > 0) {
      let arr = [];
      this.source.forEach(item => {
        let bl = false;
        for (let col of this.showColumns) {
          let colVal = item[col.field] != undefined ? item[col.field].toString() : '';
          bl = colVal.includes(value.trim());
          if (bl) {
            arr.push(item);
            break;
          }
        }
      });
      this.sourceSearch = [];
      if (arr.length > 0) this.sourceSearch = arr;
      this.databind(true);
      this.pageChange();
    }
  }
  /*-------------------------------------功能-----------------------------------*/
  /**
   * 工具栏按钮点击事件
   * @param event 工具栏事件
   * @param op 操作对象
   */
  toolOpClick(event, op) {
    console.log(op);
    let arr = [];
    this.checkedIndex.forEach(i => arr.push(this.sourceShow[i]));
    op.callBack(arr); //回调传回一个选中行数组
  }

  /**
   * 设置点击事件 显示设置功能列表
   * @param e 
   */
  settingsClick(e) {
    this.isSettingsShow = !this.isSettingsShow;
    e.stopPropagation();
  }

  checkColumns: any = [];
  /**
   * 显示选择列设置窗口
   * @param e 
   */
  showColumnsForm(e) {
    this.isSettingsShow = !this.isSettingsShow;
    this.isColumnsShow = true;
    this.checkColumns = [];
    let arr = [];
    this.config.columns.forEach(obj => {
      let newObj = Object.assign({}, obj);
      arr.push(newObj);
    });
    this.checkColumns = [].concat(arr);
    e.stopPropagation();
    //isShowCheck
  }

  /**
   * 选择显示列事件
   * @param col 列
   */
  checkChange(col) {
    col.show = !col.show;
    console.log(this.checkColumns);
  }

  /**
   * 关闭选择列窗口
   */
  closeModal() {
    this.isColumnsShow = false;
  }

  /**
   * 保存显示的列
   * @param check 是否显示选择列
   * @param fun 是否显示功能区
   */
  colSave(check, fun) {
    console.log(fun);
    this.isShowCheck = check;
    this.isfunction = fun;
    this.checkColumns.forEach((obj, i) => {
      this.config.columns[i].show = obj.show;
    });
    this.SetShowColumns();
    this.tableInit();
  }

}
