import { HandleDataService } from './../../../../../../services/handle-data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-member-home-group',
  templateUrl: './member-home-group.component.html',
  styleUrls: ['./member-home-group.component.scss'],
})
export class MemberHomeGroupComponent implements OnInit {
  constructor(private handleDataService: HandleDataService) {}

  ngOnInit() {
    this.handleDataService.setDataHeader({
      title: 'Lớp',
      isBack: true,
      defaultHref: '',
    });
  }
}
