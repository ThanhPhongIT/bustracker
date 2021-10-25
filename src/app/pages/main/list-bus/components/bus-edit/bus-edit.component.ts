import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusService} from '../../../../../services/bus.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RouteBusService} from '../../../../../services/route-bus.service';
import {MatDialog} from '@angular/material/dialog';
import {AddStudentComponent} from '../../../../../components/dialog/add-student/add-student.component';
import {MemberService} from '../../../../../services/member.service';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.scss']
})
export class BusEditComponent implements OnInit {

  busId = '';
  type = 1;
  busDetail: any;
  drivers = [];
  teachers = [];
  hiddenItems:any ={};
  isActive:any ={};
  // TODO create form group
  // 3 form group: BusForm, RouteStopForm, StudentForm
  BusForm: FormGroup;
  routeStopForm: FormGroup;
  listStudent = [];
  time: Date | null = null;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options = {
    types: [],
    componentRestrictions: {country: 'VN'}
  };


  constructor(
    private route: ActivatedRoute,
    private busService: BusService,
    private fb: FormBuilder,
    private routeBusService: RouteBusService,
    private dialog: MatDialog,
    private memberService: MemberService
  ) {
    this.busId = this.route.snapshot.params.busId;
    this.type = this.route.snapshot.queryParams.type;
    this.BusForm = new FormGroup({
      Name: new FormControl(''),
      TeacherId: new FormControl(0),
      DriverId: new FormControl(0),
      Type: new FormControl(0),
      StartTime: new FormControl(''),
    });


    this.routeStopForm = this.fb.group({
      routeStopArr: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.getBusDetail();
    this.getListDriver();
    this.getListSupervisor();
    this.getListStudent('');
  }

  log(time: Date, item): void {
    console.log(time, item);
    item.get('ExpectedTime').patchValue(time.toTimeString());
    // console.log(time && time.toTimeString());
  }

  handleAddressChange(address: Address, item): void {
    // Do some stuff
    console.log(address);
    item.get('CoordinationLong').patchValue(address.geometry.location.lng());
    item.get('CoordinationLat').patchValue(address.geometry.location.lat());
    console.log(address, address.geometry.location.lat(), address.geometry.location.lng());
  }

  getListStudent(key): void {
    this.memberService.searchStudent('').subscribe((res) => {
      this.listStudent = res;
    });
  }

  get routeStopArr(): FormArray {
    return this.routeStopForm.controls.routeStopArr as FormArray;
  }


  newRouteStop(routeId, name, time, listStudent, CoordinationLong, CoordinationLat): FormGroup {
    return this.fb.group({
      RouteId: routeId,
      StopName: name,
      ExpectedTime: time,
      CoordinationLong,
      CoordinationLat,
      StudentList: [listStudent]
    });
  }

  getBusDetail(): void {
    this.busService.getBusDetail(this.busId).subscribe((res) => {
      res.forEach((val) => {
        if (val.Type === Number(this.type)) {
          this.busDetail = val;
        }
      });
      this.BusForm.get('Name').setValue(this.busDetail.BusName);
      this.BusForm.get('TeacherId').setValue(this.busDetail.TeacherId);
      this.BusForm.get('DriverId').setValue(this.busDetail.DriverId);
      this.BusForm.get('Type').setValue(Number(this.type));
      this.BusForm.get('StartTime').setValue(this.busDetail.StartTime);
      this.busDetail.RouteStopsList.forEach((val) => {
        const time = new Date(val.ExpectedTime).toTimeString().slice(0, 5);
        console.log(time);
        this.addRoute(
          this.busDetail.RouteId,
          val.StopName,
          time,
          val.StudentList, val.CoordinationLong,
          val.CoordinationLat
        );
      });
      console.log(this.routeStopArr.value);
    });
  }


  saveBusRoute(): void {

    // Save bus info
    this.busService.editBus(this.BusForm.value, this.busId).subscribe((res) => {
    });

    const listStudentHold = [];
    const listRouteBus: {
      RouteId: number,
      StopName: string,
      CoordinationLong?: boolean,
      CoordinationLat?: boolean,
      ExpectedTime: string
    }[] = [];

    console.log(this.routeStopArr.value);

    this.routeStopArr.value.forEach((item, index) => {
      listStudentHold[index] = [];
      if (item.StudentList) {
        item.StudentList.map(((std) => {
          listStudentHold[index].push(std.StudentId);
        }));
      }

      listRouteBus.push({
        RouteId: item.RouteId,
        StopName: item.StopName,
        ExpectedTime: item.ExpectedTime,
        CoordinationLong: item.CoordinationLong,
        CoordinationLat: item.CoordinationLat,
      });


    });

    console.log(listRouteBus);

    // save bus route
    this.routeBusService.addBus(listRouteBus).subscribe(() => {
      this.routeStopArr.clear();
      this.busService.getBusDetail(this.busId).subscribe((res) => {
        res.forEach((val) => {
          if (val.Type === Number(this.type)) {
            this.busDetail = val;
          }
        });


        // save student on route
        this.busDetail.RouteStopsList.forEach((item, i) => {
          this.routeBusService.addStudentOnRoute({RouteStopId: item.RouteStopId, StudentIdList: listStudentHold[i]}).subscribe((stop) => {
            // this.getBusDetail();
          });
        });
      });
      // this.getBusDetail();

    });

    setTimeout(() => {
      this.getBusDetail();
    }, 1000);
  }

  editStudent(item, index): void {
    const dialogRef = this.dialog
      .open(AddStudentComponent, {
        data: {
          listAllStudent: this.listStudent,
          listExitStudent: item.value.StudentList
        },
        panelClass: 'modal-confirm'
      });

    dialogRef.afterClosed().subscribe(result => {
    });
    const dialogSubmitSubscription =
      dialogRef.componentInstance.submitClicked.subscribe(result => {
        console.log(result);
        item.get('StudentList').patchValue(result);
        dialogSubmitSubscription.unsubscribe();
      });
  }

  addRoute(routeId, name, time, listStudent, CoordinationLong, CoordinationLat): void {
    this.routeStopArr.push(this.newRouteStop(routeId, name, time, listStudent, CoordinationLong, CoordinationLat));
  }

  deleteRoute(lessonIndex: number): void {
    this.routeStopArr.removeAt(lessonIndex);
  }


  carUp(item, index): void {
    if (index === 0) {
      console.log('top');
    } else {
      this.routeStopArr.insert(index - 1, this.routeStopArr.at(index));
      this.routeStopArr.removeAt(index + 1);
    }
  }

  carDown(item, index): void {
    if (index === this.routeStopArr.value.length - 1) {
      console.log('end');
    } else {
      this.routeStopArr.insert(index + 2, this.routeStopArr.at(index));
      this.routeStopArr.removeAt(index);
    }
  }


  getListDriver(): void {
    this.busService.getListDriver('').subscribe((res) => {
      this.drivers = res;
    });
  }


  getListSupervisor(): void {
    this.busService.getListSupervisor('').subscribe((res) => {
      this.teachers = res;
    });
  }

}
