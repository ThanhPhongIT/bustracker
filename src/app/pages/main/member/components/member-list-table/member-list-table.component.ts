import { Component, OnInit } from '@angular/core';

export interface Privilege {
  Description?: string;
  Method: string;
  Name?: string;
  SchoolLevelId: number;
  URL: string;
}
@Component({
  selector: 'app-member-list-table',
  templateUrl: './member-list-table.component.html',
  styleUrls: ['./member-list-table.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
