import { Routes } from '@angular/router';
import { MemberDetailComponent } from './components/member-list-table/member-list-table.component';
import { MemberHomeClassComponent } from './components/member-levelGradeClass/member-list-class/member-home-class.component';
import { MemberHomeGroupComponent } from './components/member-levelGradeClass/member-list-grade/member-home-group.component';
import { MemberHomeComponent } from './components/member-levelGradeClass/member-list-level/member-home.component';
import { MemberComponent } from './member.component';

export const memberRoute: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
      {
        path: 'member-home',
        component: MemberHomeComponent,
      },
      {
        path: 'member-home/class/:classId',
        component: MemberDetailComponent,
      },
      {
        path: 'member-home/list-grade/:schoolLevelId',
        component: MemberHomeGroupComponent,
      },
      {
        path: 'member-home/list-class/:gradeId',
        component: MemberHomeClassComponent,
      },
      {
        path: '',
        redirectTo: 'member-home',
        pathMatch: 'full',
      },
    ],
  },
];
