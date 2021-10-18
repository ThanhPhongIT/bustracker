import { BusEditComponent } from './components/bus-edit/bus-edit.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { ListBusComponent } from './list-bus.component';
import { Routes } from '@angular/router';
import { ListBusHomeComponent } from './components/list-bus-home/list-bus-home.component';

export const listBusRoute: Routes = [
  {
    path: '',
    component: ListBusComponent,
    children: [
      {
        path: 'list-bus-home',
        component: ListBusHomeComponent,
      },
      {
        path: 'bus-detail/:busId',
        component: BusDetailComponent,
      },
      {
        path: 'bus-edit/:busId',
        component: BusEditComponent,
      },
      {
        path: '',
        redirectTo: 'list-bus-home',
        pathMatch: 'full',
      },
    ],
  },
];
