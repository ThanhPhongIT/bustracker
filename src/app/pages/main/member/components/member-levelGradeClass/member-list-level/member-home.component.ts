import { HandleDataService } from './../../../../../../services/handle-data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.scss'],
})
export class MemberHomeComponent implements OnInit {
  constructor(private handleDataService: HandleDataService) {
    this.handleDataService.setDataHeader({
      title: 'Cấp',
      isBack: false,
      defaultHref: '',
    });
  }
  ngOnInit(): void {}
  action() {
    this.handleDataService.setDataHeader({
      title: 'THCS',
      isBack: true,
      defaultHref: '',
    });
  }
}
