import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('file') file: ElementRef;

  constructor() { }

  ngOnInit() {
    //document.getElementById('123').addEventListener
    this.file.nativeElement.addEventListener('click',function(e){
          console.log(e);
    });
    console.log(this.file.nativeElement.addEventListener);
  }

}
