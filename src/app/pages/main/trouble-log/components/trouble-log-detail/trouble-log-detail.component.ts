import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusService} from '../../../../../services/bus.service';

@Component({
  selector: 'app-trouble-log-detail',
  templateUrl: './trouble-log-detail.component.html',
  styleUrls: ['./trouble-log-detail.component.scss']
})
export class TroubleLogDetailComponent implements OnInit {
  busId = '';
  busDetail: any;

  constructor(
    private route: ActivatedRoute,
    private busService: BusService,
  ) {
    this.busId = this.route.snapshot.params.busId;
  }

  ngOnInit(): void {
    this.getBusDetail();
  }


  getBusDetail(): void {
    this.busService.getBusDetail(this.busId).subscribe((res) => {
      this.busDetail = res[0];
      console.log(res);
    });
  }


}
