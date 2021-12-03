import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ResponeModel } from '../models/respone.model';

@Injectable({
  providedIn: 'root',
})
export class BusHisService {
  constructor(protected http: HttpClient) {}

  getListHisBusByDay(busId: string, date: string): Observable<any> {
    return this.http
      .get(`api/DailyRouteStop/Bus?BusId=${busId}&Date=${date}`)
      .pipe(map((res: ResponeModel) => res.Payload));
  }

  getListAbsenceByDay(busId: string, date: string): Observable<any> {
    return this.http
      .get(`api/StudentAbsenceRequest/Bus?BusId=${busId}&Date=${date}`)
      .pipe(map((res: ResponeModel) => res.Payload));
  }
}
