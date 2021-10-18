import { LayoutModule } from './../../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusLogComponent } from './bus-log.component';
import { ListBusLogComponent } from './list-bus-log/list-bus-log.component';
import { DetailBusLogComponent } from './detail-bus-log/detail-bus-log.component';

@NgModule({
  declarations: [BusLogComponent, ListBusLogComponent, DetailBusLogComponent],
  imports: [CommonModule, LayoutModule],
  exports: [BusLogComponent],
})
export class BusLogModule {}
