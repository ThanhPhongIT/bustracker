import {Component, OnInit} from '@angular/core';
import {MemberModel} from '../../../../../models/member.model';
import {MemberService} from '../../../../../services/member.service';
import {ActivatedRoute} from '@angular/router';

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
  ) {
  }

  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.classId = +this.activeRouter.snapshot.params.classId;
    this.getListStudentOfClass();
    this.memberService.getAllClass().subscribe(res => {
      this.classDetail = res.find(x => x.ClassId === this.classId);
    });
  }

  getListStudentOfClass(): void {
    this.memberService.getListStudentClass(this.classId).subscribe(res => {
      if (res !== null) {
        this.data = res;
      }
    });
  }
}
