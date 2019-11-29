import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { SInterface } from './interface';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService implements SInterface{
  getAll(): any[] {
    throw new Error("Method not implemented.");
  }
  getby(object: any) {
    throw new Error("Method not implemented.");
  }
  postOne(object: any): boolean {
    throw new Error("Method not implemented.");
  }
  getOne(id:string){this._getOne(id).then(auth=>{

  })}
}
