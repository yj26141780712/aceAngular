import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('file') file: ElementRef;
  fileList: any[] = [];
  constructor() { }

  ngOnInit() {

  }

  click() {
    this.file.nativeElement.click();
  }

  change(e) {
    let files = e.target.files;
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        const file = files[key];
        this.fileList.push(file);
      }
    }
  }

  delFile(e, i) {
    console.log(e);
    console.log(i);
    this.fileList.splice(i, 1);
  }
}
