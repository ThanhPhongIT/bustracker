import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusService} from '../../../../../services/bus.service';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.scss']
})
export class BusDetailComponent implements OnInit {
  busId = '';
  busDetailPickup: any;
  busDetailBackup: any;

  constructor(
    private route: ActivatedRoute,
    private busService: BusService
  ) {
    this.busId = this.route.snapshot.params.busId;
  }

  ngOnInit(): void {
    this.getBusDetail();
  }


  getBusDetail(): void{
    this.busService.getBusDetail(this.busId).subscribe((res) => {
      res.forEach((val) => {
        if (val.Type === 1){
          this.busDetailPickup = val;
        }else{
          this.busDetailBackup = val;
        }
      });
      console.log(res);
    });
  }


}
