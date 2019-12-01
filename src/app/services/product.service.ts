import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions={}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: any;

  constructor(private http: HttpClient) {
    this.items=Array<any>();
  }


  public async get(){
    return this.http.get('https://demo.nova-erp.com/Api/V3/item/all', httpOptions).toPromise()
    //return this.http.get('http://192.168.100.4:8000/Api/V3/item/all', httpOptions).toPromise()
  }

  public async getOne(id: string){
    return this.http.get('https://demo.nova-erp.com/Api/V3/item/'+id, httpOptions).toPromise()
    //return this.http.get('http://192.168.100.4:8000/Api/V3/item/all', httpOptions).toPromise()
  }
}
