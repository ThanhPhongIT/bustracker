import { MemberHomeClassComponent } from './components/member-levelGradeClass/member-list-class/member-home-class.component';
import { MemberHomeGroupComponent } from './components/member-levelGradeClass/member-list-grade/member-home-group.component';
import { MemberHomeComponent } from './components/member-levelGradeClass/member-list-level/member-home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import { MemberDetailComponent } from './components/member-list-table/member-list-table.component';
import { MemberComponent } from './member.component';
import { memberRoute } from './member.routes';

@NgModule({
  declarations: [
    MemberComponent,
    MemberDetailComponent,
    MemberHomeComponent,
    MemberHomeGroupComponent,
    MemberHomeClassComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(memberRoute),
    LoaderModule,
    MatProgressSpinnerModule,
    MatListModule,
    BaseCardModule,
    FormsModule,
    TableBaseModule,
  ],
  exports: [MemberComponent],
})
export class MemberModule {}
