import { Component, OnInit } from '@angular/core';
import { BusService } from '../../../../../services/bus.service';
import { BusModel } from '../../../../../models/bus.model';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../../../../../components/dialog/change-password/change-password.component';
import { ConfirmDeleteComponent } from '../../../../../components/dialog/confirm-delete/confirm-delete.component';
import { AddNewCarComponent } from '../../../../../components/dialog/add-new-car/add-new-car.component';

@Component({
    selector: 'app-list-bus-home',
    templateUrl: './list-bus-home.component.html',
    styleUrls: ['./list-bus-home.component.scss']
})
export class ListBusHomeComponent implements OnInit {
    listBus: BusModel[] = [];
    constructor(
        private busService: BusService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.getListBus('');
    }


    getListBus(key): void {
        this.busService.getListBus(key).subscribe((res) => {
            this.listBus = res;
        });
    }

    deleteBus(id: string): void {
        this.dialog
            .open(ConfirmDeleteComponent, {
                data: {
                    busId: id,
                    title: 'Xóa xe',
                    des: 'Bạn có chắc chắn muốn xóa xe này?'
                },
                panelClass: 'modal-confirm'
            })
            .afterClosed()
            .subscribe((res) => {
                if (res.success === true) {
                    this.getListBus('');
                }
            });
    }

    addNewCar(): void {
        this.dialog
            .open(AddNewCarComponent, {
                data: {
                },
                panelClass: 'modal-confirm'
            })
            .afterClosed()
            .subscribe((res) => {
                if (res.confirm === true) {
                    this.getListBus('');
                }
            });
    }
}
