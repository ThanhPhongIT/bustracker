import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BusService} from '../../../services/bus.service';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddNewCarComponent} from '../add-new-car/add-new-car.component';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    private busService: BusService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }


  confirm(): void{
    if (this.data.busId){
      this.busService.deleteBus(this.data.busId).subscribe((res) => {
        console.log(res);
        this.dialogRef.close();
      });
    }
    else{
      this.dialogRef.close({
        success: true
      })
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}

@NgModule({
  declarations: [ConfirmDeleteComponent],
  imports: [CommonModule],
  exports: [ConfirmDeleteComponent]
})
export class ConfirmDeleteComponentModule{}
