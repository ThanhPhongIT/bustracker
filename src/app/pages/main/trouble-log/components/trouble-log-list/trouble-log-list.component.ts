import {Component, OnInit} from '@angular/core';
import {BusModel} from '../../../../../models/bus.model';
import {BusService} from '../../../../../services/bus.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-trouble-log-list',
  templateUrl: './trouble-log-list.component.html',
  styleUrls: ['./trouble-log-list.component.scss']
})
export class TroubleLogListComponent implements OnInit {

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
