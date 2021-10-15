import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'member',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberModule),
      },
      {
        path: 'list-bus',
        loadChildren: () =>
          import('./list-bus/list-bus.module').then((m) => m.ListBusModule),
      },
      {
        path: 'bus-log',
        loadChildren: () =>
          import('./bus-log/bus-log.module').then((m) => m.BusLogModule),
      },
      {
        path: 'trouble-log',
        loadChildren: () =>
          import('./trouble-log/trouble-log.module').then(
            (m) => m.TroubleLogModule
          ),
      },
      {
        path: '',
        redirectTo: 'member',
        pathMatch: 'full',
      },
    ],
  },
];
