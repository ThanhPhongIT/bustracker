import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, NgModule, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfEmpty } from 'rxjs/operators';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() option: any;
  @Input() error: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Input() checkFile?: any;
  @Output() callback = new EventEmitter<any>();
  @Output() handleSelectChange = new EventEmitter<any>();
  fileImport: any = {};
  html: '';
  model: any = {};
  imagePath;
  imgURL;
  errorCreate;
  arrayBuffer: any;
  checkErrorEmail = false;
  checkErrorPhone = false;
  file: File;
  dataImport;
  checkBeforeUnload = false;
  constructor(
  ) { }
  ngOnChanges(): void {
    this.errorCreate = this.error || [];
    console.log(this.error);
    
    if (this.errorCreate.length !== 0) {
      if (this.error.includes("SĐT")) {
        this.checkErrorEmail = false;
        this.checkErrorPhone = true;
      }
      else if (this.errorCreate.length === 1 && this.errorCreate[0].indexOf("Email") > -1) {
        this.checkErrorEmail = true;
        this.checkErrorPhone = false;
      }
      else if (this.errorCreate.length === 1 && this.errorCreate[0].indexOf("Name") > -1) {
        this.checkErrorPhone = true;
        this.checkErrorEmail = false;
      }
      else if (this.errorCreate.length === 1 && this.errorCreate[0].indexOf("Passwords") > -1) {
        this.checkErrorPhone = true;
        this.checkErrorEmail = false;
      }
    }
  }

  ngOnInit() {
    this.model = this.dataModel || {};
    this.fileImport = this.checkFile || {};
  }
  checkChange(event) {
    this.checkBeforeUnload = event;
    window.addEventListener('beforeunload', (event) => {
      if (this.checkBeforeUnload === true) {
        event.returnValue = 'You have unfinished changes!';
      }
      else {

      }
    })
  }
  subChange(ev){
    this.handleSelectChange.emit({
      type: 'sub-select-data',
      item: this.model,
      value: +ev
    });
    
  }
  selectChange(ev) {
    this.handleSelectChange.emit({
      type: 'select-data',
      item: this.model,
      value: +ev
    });
  }
  fileDownload(url) {
    document.location.href = url;
  }
  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  onCallBackData = () => { }

  onClickButton = (i) => {
    this.checkBeforeUnload = false;
    this.callback.emit({
      item: {},
      file: this.file,
      btn: i
    });
  }
  clickSubmit = (check, item) => {
    if (check === true) {
      this.checkBeforeUnload = false;
      this.callback.emit({
        item: this.model,
        file: this.file,
        btn: item
      });
    }

  }
}


@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreateFormComponent],
})
export class CreateFormModule { }
