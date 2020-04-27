import {Injectable} from '@angular/core';
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
  register(data: any): Observable<paper[]> {
    return this.http.post<paper[]>('http://localhost:3000/api/v1/admin/article', data);
  }

  index(): Observable<paper[]> {
    return this.http.get<paper[]>('http://localhost:3000/api/v1/admin/article', {observe: 'body'});
  }

  update(data: any): Observable<paper[]> {
    return this.http.put<paper[]>('http://localhost:3000/api/v1/admin/article', data);
  }

  destory(paperID: any): Observable<paper[]> {
    return this.http.delete<paper[]>('http://localhost:3000/api/v1/admin/article/' + paperID);
  }
}
