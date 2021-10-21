import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../../../../../services/member.service';

@Component({
  selector: 'app-member-home-group',
  templateUrl: './member-home-group.component.html',
  styleUrls: ['./member-home-group.component.scss'],
})
export class MemberHomeGroupComponent implements OnInit {
  data = [];

  schoolLevelId: any;

  constructor(
    private getrouter: ActivatedRoute,
    private router: Router,
    private memberService: MemberService,
  ) {
  }

  ngOnInit(): void {
    this.schoolLevelId = this.getrouter.snapshot.params.schoolLevelId;
    this.getListGrade();
  }

  routerTo(ev): void {
    this.router.navigate([`/main/member/member-home/list-class/${ev.GradeId}`]);
  }

  getListGrade(): void {
    this.memberService.getGradeOfLevel(this.schoolLevelId).subscribe(res => {
      this.data = res;
    });
  }
}
