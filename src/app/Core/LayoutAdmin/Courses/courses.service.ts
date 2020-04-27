import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from './courses.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  getAll(): Observable<Courses[]> {
    return this.http.get<Courses[]>('/assets/json/data.json', {observe: 'body'});
  }

  getTeacher(){

  }
}
