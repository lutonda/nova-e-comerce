import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { SInterface } from './interface';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService implements SInterface{
    getOne(id:string){this._getOne(id).then(auth=>{

    })}
}
