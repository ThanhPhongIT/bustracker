import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusService} from '../../../../../services/bus.service';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.scss']
})
export class BusEditComponent implements OnInit {

  busId = '';
  type = 1;
  busDetail: any;

  constructor(
    private route: ActivatedRoute,
    private busService: BusService
  ) {
    this.busId = this.route.snapshot.params.busId;
    this.type = this.route.snapshot.queryParams.type;
  }

  ngOnInit(): void {
    this.getBusDetail();
  }


  getBusDetail(): void{
    this.busService.getBusDetail(this.busId).subscribe((res) => {
      res.forEach((val) => {
        if (val.Type === this.type){
          this.busDetail = val;
        }
      });
      console.log(res);

    });
  }

}
