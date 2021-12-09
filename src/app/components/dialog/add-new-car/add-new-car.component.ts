import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BusService } from '../../../services/bus.service';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-add-new-car',
    templateUrl: './add-new-car.component.html',
    styleUrls: ['./add-new-car.component.scss'],
})
export class AddNewCarComponent implements OnInit {
    form = new FormGroup({
        Name: new FormControl(''),
    });

    constructor(
        private dialogRef: MatDialogRef<AddNewCarComponent>,
        private busService: BusService,
        private message: NzMessageService
    ) { }

    ngOnInit(): void { }

    confirm(): void {
        if (this.form.get('Name').value === '') {
            this.message.error('Không để trống tên xe!');
        } else {
            this.busService
                .addNewCar({ Name: this.form.get('Name').value })
                .subscribe((res) => {
                    if (res.Ok === false) {
                        this.message.success(res.Message);
                        this.dialogRef.close({
                            confirm: true
                        });
                    } else {
                        this.dialogRef.close({
                            confirm: false
                        });
                    }
                });
        }

    }

    close(): void {
        this.dialogRef.close();
    }
}

@NgModule({
    declarations: [AddNewCarComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [AddNewCarComponent],
})
export class AddNewCarComponentModule { }
