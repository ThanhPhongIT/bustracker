import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show().then(r => console.log('show'));
    const request = req.clone({
      url: `${environment.API_URL}/${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return next.handle(request).pipe(
        finalize(() => this.spinner.hide()),
        retry(1));
  }
}
