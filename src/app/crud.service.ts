import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CrudService {
objs:Observable<any>
  constructor(private http:HttpClient) {
  }
  getCommodities(callback){
    this.objs = this.http.get('http://192.168.8.49:2101/getcommodities')
    this.objs.subscribe(
      data=>{
        callback(data)
      },
      err=>{
        callback(err)
      })

  }
}
