import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'x-api-key': 'c3VwZXJhZG1pbjo6NDcyNzgyNTYwNA=='
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: any;

  constructor(private http: HttpClient) {
    this.items=Array<any>();
  }


  public async get(){
    return this.http.get('http://192.168.100.4:8000/Api/V3/item/all', httpOptions).toPromise()
  }
}
