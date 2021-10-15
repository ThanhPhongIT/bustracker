import { HandleDataService } from './../../../../../../services/handle-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-home-class',
  templateUrl: './member-home-class.component.html',
  styleUrls: ['./member-home-class.component.scss'],
})
export class MemberHomeClassComponent implements OnInit {
  constructor(private handleDataService: HandleDataService) {}

  ngOnInit() {
    this.handleDataService.setDataHeader({
      title: 'Lớp 6A',
      isBack: true,
      defaultHref: '',
    });
  }
}
