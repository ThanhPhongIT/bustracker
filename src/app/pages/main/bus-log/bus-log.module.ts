import {LayoutModule} from '../../../layout/layout.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusLogComponent} from './bus-log.component';
import {ListBusLogComponent} from './list-bus-log/list-bus-log.component';
import {DetailBusLogComponent} from './detail-bus-log/detail-bus-log.component';
import {RouterModule} from '@angular/router';
import {busLogRoute} from './bus-log.routes';
import {HeaderComponentModule} from '../../../components/header/header-component.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TableBaseModule} from '../../../components/table/table.component';

@NgModule({
  declarations: [BusLogComponent, ListBusLogComponent, DetailBusLogComponent],
  imports: [CommonModule,
    LayoutModule,
    RouterModule.forChild(busLogRoute),
    HeaderComponentModule,
    MatTabsModule, TableBaseModule
  ],
  exports: [BusLogComponent],
})
export class BusLogModule {
}
