import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  settings: any;
  source: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.settings = {
      headTrHeight: 40,
      bodyTrHeight: 30,
      rowOperations: [
        { type: 'edit', iconClass: 'fa-pencil', title: "编辑", callBack: this.edit },
        { type: 'delete', iconClass: 'fa-trash', title: "删除", callBack: this.delete },
        // { type: 'download', iconClass: 'fa-trash', title: "删除" },
        // { type: 'download', iconClass: 'fa-trash', title: "删除" },
      ],
      toolOperations: [
        { type: 'edit', iconClass: 'fa-pencil', title: "编辑", callBack: this.edit },
        { type: 'delete', iconClass: 'fa-trash', title: "删除", callBack: this.delete },
        // { type: 'download', iconClass: 'fa-trash', title: "删除" },
        // { type: 'download', iconClass: 'fa-trash', title: "删除" },
      ], 
    }
    this.settings.columns = [
      { field: 'sn', title: '序号', fixed: true, width: 50 },
      { field: 'm_id', title: '注塑机编号', fixed: true, sort: true, width: 200 },
      { field: 'm_name', title: '注塑机名称', fixed: true, width: 100 },
      { field: 'm_type', title: '注塑机类型', fixed: false, width: 100 },
      { field: 'c_id', title: '采集器编号', fixed: false, width: 100 },
      { field: 'o_name', title: '出厂调试人员', fixed: false, width: 160 },
      { field: 'o_date', title: '出厂日期', fixed: false, sort: true, width: 100 },
      { field: 'area', title: '所属片区', fixed: false, width: 100 },
      { field: 'o_company', title: '出厂公司', fixed: false, width: 100 },
      { field: 'd_company', title: '代理公司', fixed: false, width: 100 },
      { field: 's_company', title: '塑料厂', fixed: false, width: 100 },
    ];
    let array = [];
    for (let i = 0; i < 130; i++) {
      array.push({ m_id: i });
    }
    this.source = [].concat(this.source = [].concat(array));
    let _url = "http://192.168.2.229:8088/IMS/api/apideviceList.action";
    this.http.get(_url).subscribe(res => {
      let json = res.json();
      if (json.code == 200) {
        let data = json.obj;
        var array = [];
        for (var i = 0; i < data.length; i++) {
          var item = { sn: "", m_id: "", m_name: "", m_type: "", c_id: "", o_name: "", o_date: "", area: "", o_company: "", d_company: "", s_company: "", remarks: "", id: "", x: "", y: "" };
          item.sn = (i + 1) + '';
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
        console.log("test");
      }
    });
  }

  sortEvent(event) {
    console.log(event); //自定义排序
    this.source.sort((a, b) => {
      //console.log(a[column.field], b[column.field]);
      if (a[event.field] <= b[event.field]) {
        return event.asc ? 1 : -1;
      }
      if (a[event.field] > b[event.field]) {
        return event.asc ? -1 : 1;
      }
    });
  }

  selectEvent(item) {
    console.log(item);
  }



  edit(item) {
    console.log(item);
  }

  delete(item) {
    console.log(item);
  }
}
