import {listBusRoute} from './list-bus.routes';
import {RouterModule} from '@angular/router';
import {ListBusComponent} from './list-bus.component';
import {LayoutModule} from '../../../layout/layout.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBusHomeComponent} from './components/list-bus-home/list-bus-home.component';
import {BusDetailComponent} from './components/bus-detail/bus-detail.component';
import {BusEditComponent} from './components/bus-edit/bus-edit.component';
import {HeaderComponentModule} from '../../../components/header/header-component.module';
import {ConfirmDeleteComponentModule} from '../../../components/dialog/confirm-delete/confirm-delete.component';
import {AddNewCarComponentModule} from '../../../components/dialog/add-new-car/add-new-car.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterCardComponentModule} from '../../../components/card/route-card/route-card.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddStudentComponentModule} from '../../../components/dialog/add-student/add-student.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';

@NgModule({
  declarations: [ListBusComponent, ListBusHomeComponent, BusDetailComponent, BusEditComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(listBusRoute),
    HeaderComponentModule,
    ConfirmDeleteComponentModule,
    AddNewCarComponentModule,
    MatTabsModule,
    RouterCardComponentModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AddStudentComponentModule,
    GooglePlaceModule,
    NzDatePickerModule,
    NzTimePickerModule
  ],
  exports: [ListBusComponent],
})
export class ListBusModule {
}
