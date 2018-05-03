import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fix-table',
  templateUrl: './fix-table.component.html',
  styleUrls: ['./fix-table.component.scss']
})
export class FixTableComponent implements OnInit {

  scrollTop:number;
  scrollLeft:number;
  constructor() { }

  ngOnInit() {
  }

  scroll(event){
    console.log(event,event.target.scrollTop);
    this.scrollTop=event.target.scrollTop;
    this.scrollLeft=event.target.scrollLeft;
    console.log(this.scrollLeft);
    //let _top =document.getElementById('top');
    //_top.scrollTop=this.scrollTop;
    //console.log(document.getElementById('top').scrollTop);
    //console.log(_left);
    //let _view1=document.getElementsByClassName(".datagird-view1");
    //_view1.
    //let _view2=document.getElementsByClassName(".datagird-view2");

    //document.getElementById("head")._scrollContent.nativeElement.scrollLeft = document.getElementById("right")._scrollContent.nativeElement.scrollLeft;
    //document.getElementById("left")._scrollContent.nativeElement.scrollTop = document.getElementById("right")._scrollContent.nativeElement.scrollTop;
  }
  test(){
    console.log(123);
  }
}
