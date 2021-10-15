import { HandleDataService } from './../../services/handle-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/utils/animations/fader.animation';
export interface DataHeader {
  title: string;
  isBack?: boolean;
  defaultHref?: string;
  isAdd?: boolean;
  callback?: Function;
}
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    // <-- add your animations here
    fader,
  ],
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;
  dataNav;
  dataHeader: DataHeader = {
    title: 'Default Title',
    isBack: false,
    defaultHref: '',
    isAdd: false,
    callback: () => {},
  };

  constructor(private handleDataService: HandleDataService) {}

  ngOnInit(): void {
    this.handleDataService.dataHeader$.subscribe((res) => {
      this.dataHeader = res;
    });
    this.dataNav = {
      list: [
        {
          icon: 'assets/svg/icon-menu-member.svg',
          name: 'Thành viên',
          linkURL: 'member',
          checkRole: null,
          api: 'api/class',
        },
        {
          icon: 'assets/svg/icon-menu-schedule.svg',
          name: 'Danh sách xe',
          linkURL: 'list-bus',
          checkRole: null,
          api: 'api/TimeTableLesson',
        },
        {
          icon: 'assets/svg/icon-menu-menu.svg',
          name: 'Lịch sử xuống xe',
          linkURL: 'bus-log',
          checkRole: null,
          api: 'api/DishMenu',
        },
        {
          icon: 'assets/svg/icon-nofitication.svg',
          name: 'Thống kê sự cố',
          linkURL: 'trouble-log',
          checkRole: null,
          api: 'api/annoucement',
        },
      ],
    };
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
