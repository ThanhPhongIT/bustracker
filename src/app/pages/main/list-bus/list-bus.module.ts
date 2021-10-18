import { listBusRoute } from './list-bus.routes';
import { RouterModule } from '@angular/router';
import { ListBusComponent } from './list-bus.component';
import { LayoutModule } from './../../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBusHomeComponent } from './components/list-bus-home/list-bus-home.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { BusEditComponent } from './components/bus-edit/bus-edit.component';

@NgModule({
  declarations: [ListBusComponent, ListBusHomeComponent, BusDetailComponent, BusEditComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(listBusRoute)],
  exports: [ListBusComponent],
})
export class ListBusModule {}
