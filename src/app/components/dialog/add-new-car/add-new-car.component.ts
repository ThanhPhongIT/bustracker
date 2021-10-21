import {Component, NgModule, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {BusService} from '../../../services/bus.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {
  form = new FormGroup({
      Name: new FormControl('')
    }
  );

  constructor(
    private dialogRef: MatDialogRef<AddNewCarComponent>,
    private busService: BusService
  ) {
  }

  ngOnInit(): void {
  }


  confirm(): void {
    this.busService.addNewCar({Name: this.form.get('Name').value}).subscribe((res) => {
      this.dialogRef.close();
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}

@NgModule({
  declarations: [AddNewCarComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [[AddNewCarComponent]]
})
export class AddNewCarComponentModule {
}
