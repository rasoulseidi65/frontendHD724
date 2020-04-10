import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {paper} from './paper.model';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  getAll(): Observable<paper[]> {
    return this.http.get<paper[]>('/assets/json/data.json', {observe: 'body'});
  }
}
