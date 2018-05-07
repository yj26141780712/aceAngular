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

  config = {
    h_gird: '262px',
    h_gird_head: '45px',
    h_gird_body: '200px',
    w_gird: '802px',
    w_gird_fixed: '200px',
    w_gird_nofixed: '600px',
    w_gird_table: '1000px',
    columns: [
      { field: 'm_id', title: '注塑机编号', fixed: true, width: 200 },
      { field: 'm_name', title: '注塑机名称', fixed: true, width: 200 },
      { field: 'm_type', title: '注塑机类型', fixed: true, width: 200 },
      { field: 'c_id', title: '采集器编号', fixed: false, width: 100 },
      { field: 'o_name', title: '出厂调试人员', fixed: false, width: 100 },
      { field: 'o_date', title: '出厂日期', fixed: false, width: 100 },
      { field: 'area', title: '所属片区', fixed: false, width: 100 },
      { field: 'o_company', title: '出厂公司', fixed: false, width: 100 },
      { field: 'd_company', title: '代理公司', fixed: false, width: 100 },
      { field: 's_company', title: '塑料厂', fixed: false, width: 100 },
    ]
  }
  source: any[];
  scrollTop: number;
  scrollLeft: number;
  constructor(private http: Http) { }

  ngOnInit() {
    let w_gird_fixed = 0; //固定列宽度
    let w_gird_nofixed = 600; //非固定列默认宽度
    let w_gird_table = 0;
    let h_gird_head = 45;
    let h_gird_body = 200;
    for (let col of this.config.columns) { 
      if (col.fixed) {
        w_gird_fixed += col.width;
      } else {
        w_gird_table += col.width;
      }
    }
    this.config.w_gird_fixed = w_gird_fixed + 'px';
    this.config.w_gird_table = w_gird_table + 'px';
    this.config.w_gird = (w_gird_fixed + w_gird_nofixed + 2) + 'px';
    this.config.h_gird_head = h_gird_head + 'px';
    this.config.h_gird_body = h_gird_body + 'px';
    this.config.h_gird = (h_gird_head + h_gird_body + 2) + 'px';

    let _url = "http://192.168.2.229:8088/IMS/api/apideviceList.action";
    this.http.get(_url).subscribe(res => {
      let json = res.json();
      if (json.code == 200) {
        let data = json.obj;
        var array = [];
        for (var i = 0; i < data.length; i++) {
          var item = { m_id: "", m_name: "", m_type: "", c_id: "", o_name: "", o_date: "", area: "", o_company: "", d_company: "", s_company: "", remarks: "", id: "", x: "", y: "" };
          item.m_id = data[i].sn;
          item.m_name = data[i].name;
          item.m_type = data[i].modelName;
          item.c_id = data[i].monitorid;
          item.o_name = data[i].cpersonnel || '';
          if (data[i].ddate != null) {
            item.o_date = data[i].ddate.substring(0, 10);
          }
          item.area = data[i].areaName;
          item.o_company = data[i].companyName;
          item.d_company = data[i].proxyName;
          item.s_company = data[i].factoryName;
          item.id = data[i].id;
          item.x = data[i].x;
          item.y = data[i].y;
          array.push(item);
        }
        this.source = [].concat(array);
      }
    });
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
    console.log(!column.sortType);
    if (!column.sortType) {
      column.sortType = "fa-sort-asc";
    } else {
      if (column.sortType == "fa-sort-asc") {
        column.sortType = "fa-sort-desc";
      } else {
        column.sortType = "fa-sort-asc";
      }
    }
    console.log(column);
  }
}
