import {Routes} from '@angular/router';
import {TroubleLogComponent} from './trouble-log.component';
import {TroubleLogListComponent} from './components/trouble-log-list/trouble-log-list.component';
import {TroubleLogDetailComponent} from './components/trouble-log-detail/trouble-log-detail.component';

export const troubleRoute: Routes = [
  {
    path: '',
    component: TroubleLogComponent,
    children: [
      {
        path: 'trouble-list',
        component: TroubleLogListComponent,
      },
      {
        path: 'trouble-detail/:busId',
        component: TroubleLogDetailComponent
      },
      {
        path: '',
        redirectTo: 'trouble-list',
        pathMatch: 'full',
      },
    ],
  },
];
