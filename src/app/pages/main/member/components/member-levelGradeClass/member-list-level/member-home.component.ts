import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MemberService} from '../../../../../../services/member.service';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.scss'],
})
export class MemberHomeComponent implements OnInit {

  listLevel = [];

  constructor(
    private router: Router,
    private memberService: MemberService
  ) {
  }

  ngOnInit(): void {
    this.getListLevel();
  }


  getListLevel(): void {
    this.memberService.getListLevel().subscribe((res) => {
      this.listLevel = res;
    });
  }


  routerTo(ev): void {
    this.router.navigateByUrl(`/main/member/member-home/list-grade/${ev.SchoolLevelId}`).then(r => console.log(r));
  }
}
