import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'https://localhost:5001/api/orientation-startup';
  constructor(public http: HttpClient) { }

  getContent(){
    return new Promise(resolve =>{
      this.http.get(this.apiUrl).subscribe(data =>{
        resolve(data);},
        err => {
          console.log(err);
        });
      });
  }

  getDetail(id){
    var detailUrl = this.apiUrl + '/' + id;
    return new Promise(resolve => {
      this.http.get(detailUrl).subscribe(data =>{
        resolve(data);},
        err => {
          console.log(err);
        });
    });
  }



}
