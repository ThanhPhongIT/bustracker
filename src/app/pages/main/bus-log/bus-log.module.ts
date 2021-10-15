import { LayoutModule } from './../../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusLogComponent } from './bus-log.component';

@NgModule({
  declarations: [BusLogComponent],
  imports: [CommonModule, LayoutModule],
  exports: [BusLogComponent],
})
export class BusLogModule {}
