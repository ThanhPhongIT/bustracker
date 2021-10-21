import {Component, OnInit} from '@angular/core';
import {BusModel} from '../../../../models/bus.model';
import {BusService} from '../../../../services/bus.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-bus-log',
  templateUrl: './list-bus-log.component.html',
  styleUrls: ['./list-bus-log.component.scss']
})
export class ListBusLogComponent implements OnInit {
  listBus: BusModel[] = [];

  constructor(
    private busService: BusService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getListBus('');
  }


  getListBus(key): void {
    this.busService.getListBus(key).subscribe((res) => {
      this.listBus = res;
    });
  }

}
