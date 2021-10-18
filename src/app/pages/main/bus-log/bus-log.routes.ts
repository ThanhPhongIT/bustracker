import { Routes } from '@angular/router';
import { BusLogComponent } from './bus-log.component';
import { DetailBusLogComponent } from './detail-bus-log/detail-bus-log.component';
import { ListBusLogComponent } from './list-bus-log/list-bus-log.component';

export const listBusRoute: Routes = [
  {
    path: '',
    component: BusLogComponent,
    children: [
      {
        path: 'list-bus-log',
        component: ListBusLogComponent,
      },
      {
        path: 'log-detail/:busId',
        component: DetailBusLogComponent,
      },
      {
        path: '',
        redirectTo: 'list-bus-log',
        pathMatch: 'full',
      },
    ],
  },
];
