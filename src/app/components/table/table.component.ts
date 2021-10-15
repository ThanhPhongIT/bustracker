import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import * as XLSX from 'xlsx';
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() tableData: any;
    @Input() listActive?: any;
    @Input() btnTableHandel?: any;
    @Input() listFilter?: any;
    @Output() callback = new EventEmitter<any>();
    @ViewChild('file') clickFile: ElementRef;
    @ViewChild('fileUpload') uploadDoc: ElementRef;
    @ViewChild('menu') menu: ElementRef;
    @ViewChild('a') a: ElementRef;
    totalPage: number;
    currentPage: number = 1;
    dataSub = [];
    pageSive = 25;
    file: File;
    arrayBuffer;
    showDeleteAll = false;
    showCheckAll = false;
    dataImport: any[];
    constructor() { }
    listPrivilege: any = [];
    checkPrivilege: any;
    checkEdit: any;
    ngOnChanges() {
        this.showDeleteAll = false;
        this.showCheckAll = false;
        this.data.map(x => x.check = false);
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.dataSub = this.data.filter((x, ix) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
        this.currentPage = 1;
        this.onLoadDatePagitor();
    }
    changeNumberItem(value) {
        this.pageSive = +value;
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.dataSub = this.data.filter((x, ix) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
        this.currentPage = 1;
        this.onLoadDatePagitor();
    }
    selectAll(ev) {
        this.data.forEach(x => {
            x.check = ev
        });
        this.showDeleteAll = ev;
        this.showCheckAll = ev;
    }

    selectItem(item, ev) {
        item.check = ev;
        this.data.forEach(x => {
            const check = this.data.find(x => x.check === true);
            if (check) {
                this.showDeleteAll = true;
            }
            else {
                this.showDeleteAll = false;
            }
        });
    }
    clickDeleteAll() {
        this.callback.emit({
            type: "delete-all",
            item: this.data.filter(x => x.check === true)
        })
    }
    incomingfile(event) {
        let fileReader = new FileReader();
        this.file = event.target.files[0];
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
            console.log(this.dataImport);

        }
        fileReader.readAsArrayBuffer(this.file);
    }

    ngOnInit() {
        // this.listPrivilege = JSON.parse(localStorage.getItem('privilege_list'));
        // console.log(this.listPrivilege);
        // let check = this.listPrivilege.find(x => x.Method === "POST" && x.URL === 'api/student' || x.Method === "POST" && x.URL === 'api/annoucement'
        //     || x.Method === "POST" && x.URL === 'api/news' || x.Method === "POST" && x.URL === 'api/homework' || x.Method === "POST" && x.URL ==="api/userprofile"
        // );
        // if (check) {
        //     return this.checkPrivilege = true;
        // }
        // else {
        //     this.checkPrivilege = false;
        // }
        // let checkedit = this.listPrivilege.find(x => x.Method === 'PUT' && x.URL === 'api/student' || x.Method === "PUT" && x.URL === 'api/annoucement'
        //     || x.Method === "PUT" && x.URL === 'api/news' ||x.Method === "PUT" && x.URL === 'api/homework' || x.Method === "PUT" && x.URL ==="api/userprofile");
        // if (checkedit) {
        //     return this.checkPrivilege = true;
        // }
        // else {
        //     this.checkPrivilege = false;
        // }
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.onLoadDatePagitor();
    }

    nextPage = () => {
        if (this.currentPage + 1 > this.totalPage) return;
        this.currentPage += 1;
        this.onLoadDatePagitor();
    }

    backPage = () => {
        if (this.currentPage - 1 === 0) return;
        this.currentPage -= 1;
        this.onLoadDatePagitor();
    }

    onLoadDatePagitor = () => {
        this.dataSub = this.data.filter((x, ix) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
    }

    onClickSetting = (item, type) => {
        this.callback.emit({
            item: item,
            type: type
        })
    }

    onClickBtnActive = (i) => {
        if (i.type === 'upload-file') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i.type === 'create') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i.type === 'upload') {
            this.clickFile.nativeElement.click();
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i.type === 'uploadFile') {
            this.uploadDoc.nativeElement.click();
        }
        if (i.type === 'noti') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i === 'create') {
            this.callback.emit({
                type: i
            })
        }
        if (i === 'uploadDoc') {
            this.callback.emit({
                type: i
            })
        }
        if (i.type === 'result') {
            this.callback.emit({
                type: i.type
            })
        }
    }
    chooseFile(event) {
        this.callback.emit(event)

    }

    handleRouteLink = (item) => {
        this.callback.emit({
            type: 'route',
            item: item
        })
    }
}

@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        CommonModule,
        MatMenuModule
    ],
    exports: [
        TableComponent
    ]
})
export class TableBaseModule { }