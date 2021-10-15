import { HandleDataService } from './../../../services/handle-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  template: `<router-outlet></router-outlet>`,
})
export class MemberComponent implements OnInit {
  constructor(private handleDataService: HandleDataService) {}

  ngOnInit(): void {}
}
