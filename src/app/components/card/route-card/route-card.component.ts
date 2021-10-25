import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentCardComponentModule} from '../student-card/student-card.component';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.scss']
})
export class RouteCardComponent implements OnInit {
  @Input() ListBusRoute: any;
  hiddenItems:any ={};
  isActive:any ={};
  constructor() { }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [RouteCardComponent],
  imports: [CommonModule, StudentCardComponentModule],
  exports: [RouteCardComponent]
})

export class RouterCardComponentModule{}
