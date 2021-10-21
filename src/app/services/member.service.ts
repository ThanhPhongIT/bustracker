import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ResponeModel} from '../models/respone.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) {
  }

  getListLevel(): Observable<any> {
    return this.http.get('api/SchoolLevel').pipe(map((res: any) => res.Payload));
  }

  getGradeOfLevel(level: number): Observable<any> {
    return this.http.get(`api/Grade?SchoolLevelId=${level}`).pipe(map((res: any) => res.Payload));
  }

  getClassOfGrade(gradeId: number): Observable<any> {
    return this.http.get(`api/class?GradeId=${gradeId}`).pipe(map((res: any) => res.Payload));
  }

  getListStudentClass(classId): Observable<any> {
    return this.http.get(`api/Student/Bus?ClassId=${classId}`).pipe(map((res: any) => res.Payload));
  }

  getAllStudent(): Observable<any> {
    return this.http.get('api/student/class').pipe(map((res: any) => res.Payload));
  }

  searchMember(studentId, keyword): Observable<any> {
    return this.http.get(`api/student?StudentId=${studentId}&keyword=${keyword}`).pipe(map((res: any) => res.Payload));
  }

  getAllClass(): Observable<any> {
    return this.http.get('api/class/all').pipe(map((res: any) => res.Payload));
  }

  searchStudent(key: string): Observable<any> {
    return this.http.get(`api/Student?keyword=${key}&StudentId=null`).pipe(map((res: ResponeModel) => res.Payload));
  }
}

