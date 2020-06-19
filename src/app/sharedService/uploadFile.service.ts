import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  public token:string;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  uploadFile(image:any) {
    return this.http.post('http://api.hd724.com/api/v1/users/image', image);
  }

}
