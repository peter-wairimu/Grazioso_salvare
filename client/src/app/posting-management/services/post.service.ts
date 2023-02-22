import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }
  getrecords(endpointurl:any, payload:any) {
    const options = {
      params : payload
    };
    return this.http.get<[]>(endpointurl, options);

  }
  postrecord(endpointurl:any, payload:any) {

    return this.http.post<[]>(endpointurl, payload);
  }


  
}
