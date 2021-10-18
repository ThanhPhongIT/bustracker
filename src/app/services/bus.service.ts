import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from './base-api.service';
import {map, Observable} from 'rxjs';
import {ResponeModel} from '../models/respone.model';

@Injectable({
  providedIn: 'root'
})
export class BusService extends BaseApiService<any>{
  constructor(protected http: HttpClient) {
    super(http, 'Bus');
  }

  getListBus(key: string): Observable<any>{
    return this.http.get(`api/Bus?keyword=${key}`).pipe(map((res: ResponeModel) => res.Payload));
  }

  getBusDetail(id: string): Observable<any>{
    return this.http.get(`api/Bus/${id}`).pipe(map((res: ResponeModel) => {
      return res.Payload;
    }));
  }

  deleteBus(id: string): Observable<any>{
    return this.http.delete(`api/Bus/${id}`).pipe(map(res => res));
  }

  addNewCar(data: {Name: string}): Observable<any>{
    return this.http.post('api/Bus', data).pipe(map(res => res));
  }

  getListDriver(key: string): Observable<any>{
    return this.http.get(`api/Driver?keyword=${key}`).pipe(map((res: ResponeModel) => res.Payload));
  }

  getListSupervisor(key: string): Observable<any>{
    return this.http.get(`api/Supervisor?keyword=${key}`).pipe(map((res: ResponeModel) => res.Payload));
  }

  editBus(data: {Name: string, TeacherId: number, DriverId: number, Type: number, StartTime: string}, id: string): Observable<any>{
    return this.http.put(`api/Bus/${id}`, data).pipe(map(res => res));
  }
}
