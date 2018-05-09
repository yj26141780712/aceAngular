import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  settings: any;
  source: any[];
  text:string;
  constructor(private http: Http) { 

  }

  ngOnInit() {
    this.settings = {
      width: "100%",
      columns: [
        { field: 'm_id', title: '注塑机编号', fixed: true, sort: true, width: 200 },
        { field: 'm_name', title: '注塑机名称', fixed: false, width: 100 },
        { field: 'm_type', title: '注塑机类型', fixed: false, width: 100 },
        { field: 'c_id', title: '采集器编号', fixed: false, width: 100 },
        { field: 'o_name', title: '出厂调试人员', fixed: false, width: 60 },
        { field: 'o_date', title: '出厂日期', fixed: false, width: 100 },
        { field: 'area', title: '所属片区', fixed: false, width: 100 },
        { field: 'o_company', title: '出厂公司', fixed: false, width: 100 },
        { field: 'd_company', title: '代理公司', fixed: false, width: 100 },
        { field: 's_company', title: '塑料厂', fixed: false, width: 150 },
      ]
    }
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
        console.log("test");
      }
    });
    setTimeout(()=>{
      let _url = "http://192.168.2.229:8088/IMS/api/apideviceList.action?companyId=400";
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
          console.log("test");
        }
      });
    },5000);
  }

  sortEvent(event) {
    console.log(event);
    this.source.sort((a, b) => {
      //console.log(a[column.field], b[column.field]);
      if (a[event.field] <= b[event.field]) {
        return event.bl_asc ? 1 : -1;
      }
      if (a[event.field] > b[event.field]) {
        return event.bl_asc ? -1 : 1;
      }
    })
  }


  click(vale){
    this.text = '123';
  }
}
