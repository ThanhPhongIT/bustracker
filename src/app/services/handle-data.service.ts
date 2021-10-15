import { DataHeader } from './../layout/main-layout/main-layout.component';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
Injectable({
  providedIn: 'root',
});
export class HandleDataService {
  // tslint:disable-next-line: variable-name
  _dataHeader = new BehaviorSubject<DataHeader>({
    title: 'Default Title',
  });
  dataHeader$ = this._dataHeader.asObservable();

  setDataHeader(data: DataHeader): void {
    this._dataHeader.next(data);
  }
}
