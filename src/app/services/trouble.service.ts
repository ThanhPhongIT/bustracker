import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ResponeModel} from '../models/respone.model';

@Injectable({
  providedIn: 'root'
})

export class TroubleService{
  constructor(private http: HttpClient) {}

  getListTroubleByDay(busId: string, date: string): Observable<any>{
    return this.http.get(`api/Issues?BusId=${busId}&Date=${date}`).pipe(map((res: ResponeModel) => res.Payload));
  }

}
