import { LayoutModule } from '../../../layout/layout.module';
import { TroubleLogComponent } from './trouble-log.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TroubleLogListComponent } from './components/trouble-log-list/trouble-log-list.component';
import { TroubleLogDetailComponent } from './components/trouble-log-detail/trouble-log-detail.component';
import {RouterModule} from '@angular/router';
import {troubleRoute} from './trouble-log.routes';

@NgModule({
  declarations: [TroubleLogComponent, TroubleLogListComponent, TroubleLogDetailComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(troubleRoute)],
  exports: [TroubleLogComponent],
})
export class TroubleLogModule {}
