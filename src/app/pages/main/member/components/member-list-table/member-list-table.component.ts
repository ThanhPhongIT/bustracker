import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../../../../models/member.model';
import { MemberService } from '../../../../../services/member.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface Privilege {
  Description?: string;
  Method: string;
  Name?: string;
  SchoolLevelId: number;
  URL: string;
}

@Component({
  selector: 'app-member-list-table',
  templateUrl: './member-list-table.component.html',
  styleUrls: ['./member-list-table.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  config = new MemberModel();
  tableData;
  data = [];
  classId: number;
  classDetail;

  constructor(
    private activeRouter: ActivatedRoute,
    private memberService: MemberService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.classId = +this.activeRouter.snapshot.params.classId;
    this.getListStudentOfClass();
    this.memberService.getAllClass().subscribe((res) => {
      this.classDetail = res.find((x) => x.ClassId === this.classId);
    });
  }
  back(): void {
    this.location.back();
  }

  getListStudentOfClass(): void {
    this.memberService.getListStudentClass(this.classId).subscribe((res) => {
      if (res.length > 0) {
        this.data = res;
      } else {
        this.data = [
          {
            StudentName: 'sdfdsf',
            DOB: '12/12/2020',
            DepartBus: 'dsdfsd',
            DepartStop: 'sdfdsfdf',
            ReturnBus: 'scdfdsf',
            ReturnStop: 'sdsdfds',
          },
        ];
      }
    });
  }
}
