import {Component, EventEmitter, Inject, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BusService} from '../../../services/bus.service';
import {CommonModule} from '@angular/common';
import {NzSelectModule} from 'ng-zorro-antd/select';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  @Output() submitClicked = new EventEmitter<any>();


  constructor(
    private dialogRef: MatDialogRef<AddStudentComponent>,
    private busService: BusService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  ngOnInit(): void {
    const exits = [];
    console.log(this.data.listExitStudent);
    if (this.data.listExitStudent) {
      this.data.listExitStudent.map((val) => {
        exits.push(val.StudentId);
      });
      this.listOfTagOptions = exits;
    }
    const children: Array<{ label: string; value: string }> = [];
    if (this.data.listAllStudent) {
      this.data.listAllStudent.map((val) => {
        children.push({label: val.StudentName, value: val.StudentId});
      });
      this.listOfOption = children;
    }
  }

  confirm(): void {
    const listPass = [];
    this.data.listAllStudent.map((res) => {
      this.listOfTagOptions.map((tag) => {
        if (res.StudentId === tag) {
          listPass.push(res);
        }
      });
    });
    this.submitClicked.emit(listPass);
    this.dialogRef.close();
    // console.log(this.listOfTagOptions);
  }

  isNotSelected(value: string): boolean {
    return this.listOfTagOptions.indexOf(value) === -1;
  }

  close(): void {
    this.dialogRef.close();
  }


}


@NgModule({
  declarations: [AddStudentComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NzSelectModule],
  exports: [AddStudentComponent]
})
export class AddStudentComponentModule {
}
