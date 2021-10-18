import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
@Input() ListStudent: any;
  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [StudentCardComponent],
  imports: [CommonModule],
  exports: [StudentCardComponent]
})

export class StudentCardComponentModule { }
