import {LayoutModule} from '../../../layout/layout.module';
import {TroubleLogComponent} from './trouble-log.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TroubleLogListComponent} from './components/trouble-log-list/trouble-log-list.component';
import {TroubleLogDetailComponent} from './components/trouble-log-detail/trouble-log-detail.component';
import {RouterModule} from '@angular/router';
import {troubleRoute} from './trouble-log.routes';
import {HeaderComponentModule} from '../../../components/header/header-component.module';
import {TableBaseModule} from '../../../components/table/table.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TroubleLogComponent, TroubleLogListComponent, TroubleLogDetailComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(troubleRoute), HeaderComponentModule, TableBaseModule, FormsModule],
  exports: [TroubleLogComponent],
})
export class TroubleLogModule {
}
