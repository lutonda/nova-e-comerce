
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

export class RestService {

constserverUrl='https://demo.nova-erp.com/Api/V3/';


  constructor(private http: HttpClient) {}

  public async _getAll(){
    return this.http.get(this.constserverUrl+'item/all', httpOptions).toPromise()
  }

  public async _getOne(id: string){
    return this.http.get(this.constserverUrl+'item/'+id, httpOptions).toPromise()
  }

  public async _getby(object: any){
    return this.http.post(this.constserverUrl+'item/',object, httpOptions).toPromise()
  }

  public async _postOne(object: any){
    return this.http.post<any>(this.constserverUrl+'item',object, httpOptions).toPromise()
  }
}
