import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from './base-api.service';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RouteBusService extends BaseApiService<any>{
  constructor(protected http: HttpClient) {
      super( http, 'api/RouteStop');
  }
  deleteBus(routeStopId: string): Observable<any>{
    return this.delete(routeStopId).pipe(map(res => res));
  }

  addBus(
    data: {
      RouteId: number,
      StopName: string,
      CoordinationLong?: boolean,
      CoordinationLat?: boolean,
      ExpectedTime: string
    }): Observable<any>{
    return this.create(data).pipe(map(res => res));
  }


  editRoute(RouteStopId: string, data: {
    StopName: string,
    CoordinationLong?: boolean,
    CoordinationLat?: boolean,
    ExpectedTime: string
  }): Observable<any>{
    return this.http.put(`api/RouteStop/${RouteStopId}`, data).pipe(map(res => res));
  }

  addStudentOnRoute(data: {RouteStopId: string, listStudent: any}): Observable<any>{
    return this.http.post(`api/RouteStopStudent`, data).pipe(map(res => res));
  }

  deleteStudentFromRoute(RouteStopStudentId: string): Observable<any>{
    return this.http.delete(`api/RouteStopStudent/${RouteStopStudentId}`).pipe(map(res => res));
  }

}
