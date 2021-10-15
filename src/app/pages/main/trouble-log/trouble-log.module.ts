import { LayoutModule } from './../../../layout/layout.module';
import { TroubleLogComponent } from './trouble-log.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TroubleLogComponent],
  imports: [CommonModule, LayoutModule],
  exports: [TroubleLogComponent],
})
export class TroubleLogModule {}
