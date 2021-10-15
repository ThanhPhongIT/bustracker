import { ListBusComponent } from './list-bus.component';
import { LayoutModule } from './../../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBusHomeComponent } from './components/list-bus-home/list-bus-home.component';

@NgModule({
  declarations: [ListBusComponent, ListBusHomeComponent],
  imports: [CommonModule, LayoutModule],
  exports: [ListBusComponent],
})
export class ListBusModule {}
