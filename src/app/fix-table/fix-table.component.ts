import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fix-table',
  templateUrl: './fix-table.component.html',
  styleUrls: ['./fix-table.component.scss']
})
export class FixTableComponent implements OnInit {

  //表宽度
  //固定列宽度 w_gird_fixed 
  //非固定列宽度 w_gird_nofixed
  //表高度
  //表头高度 h_gird_head
  //表身高度 h_gird_body
  //表格实际宽度

  //排序 fa-sort fa-sort-asc fa-sort-desc

  config: any = {
    h_gird: '245px',
    h_gird_view: '243px',
    h_gird_head: '45px',
    h_gird_body: '198px',
    w_gird: '800px',
    w_gird_fixed: '200px',
    w_gird_nofixed: '598px',
    w_gird_table: '1000px',
    h_columns: 45,
    columns: [
    ]
  }
  @Input() settings: any;
  @Input() source: any[];
  scrollTop: number;
  scrollLeft: number;
  constructor(private http: Http) { }

  ngOnInit() {
    Object.assign(this.config, this.settings);
    console.log(this.config);
    if (this.config.height && this.config.width) {
      //如果传入的height和width不是数字 做转数字处理

      let w_gird_fixed = 0; //固定列宽度
      let w_gird_nofixed = 0; //非固定列默认宽度
      let w_gird_table = 0;
      let h_gird_head = 45;
      let h_gird_body = this.config.height - 45 - this.config.h_columns - 2;

      //计算固定和非固定部分宽度
      for (let col of this.config.columns) {
        if (col.fixed) {
          w_gird_fixed += col.width;
        } else {
          w_gird_table += col.width;
        }
      }

      this.config.w_gird_fixed = w_gird_fixed + 'px';
      this.config.w_gird_nofixed = (this.config.width - w_gird_fixed - 2) + 'px'; // -2 除去边框宽度
      this.config.w_gird_table = w_gird_table + 'px';
      this.config.w_gird_view = (this.config.width - 2) + 'px';
      this.config.w_gird = this.config.width + 'px';

      this.config.h_gird_head = this.config.h_columns + 'px';
      this.config.h_gird_head = h_gird_head + 'px';
      this.config.h_gird_body = (this.config.height - h_gird_head - 2) + 'px'; // -2 除去边框高度
      this.config.h_gird = this.config.height + 'px';

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
    //console.log(column.field);
    this.source.sort((a, b) => {
      //console.log(a[column.field], b[column.field]);
      if (a[column.field] <= b[column.field]) {
        return bl_asc ? 1 : -1;
      }
      if (a[column.field] > b[column.field]) {
        return bl_asc ? -1 : 1;
      }
    });
    console.log(this.source);
    //this.source.sort();
  }

}
