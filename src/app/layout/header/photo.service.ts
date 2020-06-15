import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  Image: any[];
  constructor(private http: HttpClient) { }
  getImages() {
    return this.http.get<any>('./photos.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { console.log(data); return data; });
  }
}
