import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private allowed = ['/assets', '/api/token'];
  constructor(private storage: LocalStorageService, private router: Router) {}

  // tslint:disable-next-line:typedef
  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    if (this.allowed.some((url) => req.url.includes(url))) {
      return next.handle(req);
    }
    let token = '';
    if (localStorage.getItem('access_token')){
      token = localStorage.getItem('access_token');
    }
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    if (!token) {
      return next.handle(req);
    }

    return next.handle(req).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // this.noti.showError(err.message);
            } else {
              // console.log(err);
            }
            // console.log(err);
          }
        },
        () => {

        }
      )
    );
  }
}
