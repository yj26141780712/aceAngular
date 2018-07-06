import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss']
})
export class JsonTreeComponent implements OnInit {

  nodes: any[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
    this.treeInit();
  }

  treeInit() {
    // this.nodes = [
    //   {
    //     title: '注塑机参数列表',
    //     key: '1',
    //     isExpanded: true,
    //   }
    // ]
    let partsPromise = this.http.get('/assets/json/parts.json').toPromise();
    let categoryPromise = this.http.get('/assets/json/select_from_base_part_category_201807021627.json').toPromise();
    let paramsPromise = this.http.get('/assets/json/select_from_base_param__201807021623.json').toPromise();
    // partsPromise.then(res => {
    //   let json = res.json();
    //   console.log(json);
    // });
    let classArr = [
      { subclass_id: 0, name: '输出点定义' },
      { subclass_id: 1, name: '输入点定义' },
      { subclass_id: 2, name: '模具参数' },
      { subclass_id: 3, name: '版本信息' },
      { subclass_id: 4, name: '归零参数' },
      { subclass_id: 5, name: '液压参数' },
      { subclass_id: 6, name: '状态数据' }
    ];

    Promise.all([partsPromise, categoryPromise, paramsPromise]).then(res => {
      let parts = res[0].json().parts;
      let categorys = res[1].json().categorys;
      let params = res[2].json().params;
      console.log(parts);
      console.log(categorys);
      console.log(params);
      let arrCategorys = [];
      console.time('tree');
      categorys.forEach(objcategory => {
        let arrParts = [];
        parts.forEach(objpart => {
          if (objpart.part_category_id == objcategory.part_category_id) {
            let arrClass = [];
            classArr.forEach(objClass => {
              let arrParams = [];
              params.forEach(objparam => {
                if (objparam.part_category_id == objpart.part_category_id && objparam.part_id == objpart.part_id && objparam.subclass_id == objClass.subclass_id) {
                  arrParams.push({
                    title: objparam.ch_name + `(${objparam.address})`,
                    address: objparam.address,
                    isChecked: true,
                    key: objparam.id,
                  });
                }
              });
              if (arrParams.length > 0) {
                arrClass.push({
                  title: objClass.name + `(${objpart.part_id}${objClass.subclass_id})`,
                  key: objClass.subclass_id,
                  children: arrParams
                });
              }
            });
            if (arrClass.length > 0) {
              arrParts.push({
                title: objpart.part_name + `(${objpart.part_id})`,
                key: objpart.key,
                children: arrClass
              })
            }
          }
        });
        if (arrParts.length > 0) {
          arrCategorys.push({
            title: objcategory.name + `(${objcategory.part_category_id})`,
            key: objcategory.id,
            children: arrParts
          });
        }
      });
      console.timeEnd('tree');
      console.log(arrCategorys);
      this.nodes.push({
        title: '注塑机参数列表',
        key: '1',
        isExpanded: true,
        children: arrCategorys
      })
    });

    //let categoryPromise = this.http.get('/assets/json/select_from_base_part_201807030805.json').toPromise();
    //his.http.get('/assets/json/select_from_base_param__201807021623.json')
  }
}
