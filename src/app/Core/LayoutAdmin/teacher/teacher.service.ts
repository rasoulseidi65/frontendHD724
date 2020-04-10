import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from './teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  getAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('/assets/json/dataTeacher.json', {observe: 'body'});
  }
}
