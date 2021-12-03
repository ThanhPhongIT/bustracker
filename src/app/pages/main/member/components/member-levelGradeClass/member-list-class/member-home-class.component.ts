import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../../../../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-home-class',
  templateUrl: './member-home-class.component.html',
  styleUrls: ['./member-home-class.component.scss'],
})
export class MemberHomeClassComponent implements OnInit {
  data: [];

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private memberService: MemberService,
    private location: Location
  ) {}

  gradeId;
  listGrade;

  ngOnInit(): void {
    this.gradeId = +this.activeRouter.snapshot.params.gradeId;
    this.getListClass();
  }
  back(): void {
    this.location.back();
  }

  getListClass(): void {
    this.memberService.getClassOfGrade(this.gradeId).subscribe((res) => {
      this.data = res;
    });
  }

  routerTo(ev): void {
    this.router.navigate([`/main/member/member-home/class/${ev.ClassId}`]);
  }
}
