import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusService} from '../../../../services/bus.service';
import {BusHisService} from '../../../../services/bus-his.service';
import {AbsenceModel} from '../../../../models/absence.model';

@Component({
  selector: 'app-detail-bus-log',
  templateUrl: './detail-bus-log.component.html',
  styleUrls: ['./detail-bus-log.component.scss']
})
export class DetailBusLogComponent implements OnInit {

  busId = '';
  busDetail: any;
  date = new Date().toISOString();
  DepartList: any = [{
    Time: this.date,
    StopName: 'Hà nội',
    CountOnBusStudent: 1,
    TotalStudent: 3,
    StudentList: [{
      StudentId: 1,
      MediaURL: 'assets/images/Rectangle 76.svg',
      StudentName: 'Phong',
      Status: 1
    }, {
      StudentId: 1,
      MediaURL: 'assets/images/Rectangle 76.svg',
      StudentName: 'Phong',
      Status: 3
    }, {
      StudentId: 1,
      MediaURL: 'assets/images/Rectangle 76.svg',
      StudentName: 'Phong',
      Status: 4
    },

    ]
  }];
  ReturnList: any;
  config = new AbsenceModel();
  tableData;
  dataReturnList = [];
  dataDepartList = [];
  classId: number;
  classDetail;

  constructor(
    private route: ActivatedRoute,
    private busService: BusService,
    private busHisService: BusHisService
  ) {
    this.busId = this.route.snapshot.params.busId;
  }

  ngOnInit(): void {
    this.getBusDetail();
    this.tableData = this.config.collums;
    this.getListAbsence();
    // this.getBusLogDetail();
    this.getListAbsence();
  }


  getBusDetail(): void {
    this.busService.getBusDetail(this.busId).subscribe((res) => {
      this.busDetail = res[0];
      console.log(res);
    });
  }

  getBusLogDetail(): void {
    this.busHisService.getListHisBusByDay(this.busId, '12/12/2020').subscribe((res) => {
      this.DepartList = res.DepartList;
      this.ReturnList = res.ReturnList;
    });
  }

  getListAbsence(): void {
    this.busHisService.getListAbsenceByDay(this.busId, '12/12/2020').subscribe((res) => {
      this.dataReturnList = res.ReturnList;
      this.dataDepartList = res.DepartList;
      console.log(res);
    });
  }
}
