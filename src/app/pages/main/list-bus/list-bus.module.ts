import { ListBusComponent } from './list-bus.component';
import { LayoutModule } from './../../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListBusComponent],
  imports: [CommonModule, LayoutModule],
  exports: [ListBusComponent],
})
export class ListBusModule {}
