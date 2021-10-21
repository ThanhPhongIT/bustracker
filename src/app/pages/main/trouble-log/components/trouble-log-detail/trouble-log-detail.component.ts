import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusService} from '../../../../../services/bus.service';
import {TroubleModel} from '../../../../../models/trouble.model';
import {TroubleService} from '../../../../../services/trouble.service';

@Component({
  selector: 'app-trouble-log-detail',
  templateUrl: './trouble-log-detail.component.html',
  styleUrls: ['./trouble-log-detail.component.scss']
})
export class TroubleLogDetailComponent implements OnInit {
  busId = '';
  busDetail: any;
  config = new TroubleModel();
  tableData;
  data = [];

  constructor(
    private route: ActivatedRoute,
    private busService: BusService,
    private troubleService: TroubleService
  ) {
    this.busId = this.route.snapshot.params.busId;
  }

  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.getBusDetail();
    this.getListTrouble();
  }


  getBusDetail(): void {
    this.busService.getBusDetail(this.busId).subscribe((res) => {
      this.busDetail = res[0];
      console.log(res);
    });
  }

  getListTrouble(): void {
    this.troubleService.getListTroubleByDay(this.busId, '2021-07-21').subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }


}
