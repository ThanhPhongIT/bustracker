import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, Observer} from 'rxjs';
import { ChangeModel } from '../models/auth/change.model';
import { BaseApiService } from './base-api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'api/SalesManager');
  }

  login(username: string, pwd: string): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    return this.http.post<any>(`Token`,
        `grant_type=password&username=${username}&password=${pwd}`,
        httpOptions);
}

  changePassword = (data: ChangeModel) => {
    return this.http.post(`api/Account/ChangePassword`, data);
  }
  getPrivilegeList(token): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
      })
  };
    return this.http.get('api/privilege', httpOptions).pipe(map((res: any) => res));
  }
}
