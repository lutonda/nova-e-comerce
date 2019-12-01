
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// tslint:disable-next-line:max-line-length
const defaultToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJqd3QiOiJ7XCJ0eXBcIjpcIkpXVFwiLFwiaWRlbnRpdHlcIjpcInN1cGVyYWRtaW5cIixcImV4cFwiOjE1NzUyMjY4NjF9In0.';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constserverUrl='http://0.0.0.0:8000/Api/V3/';

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {}

  public getToken(): string {
    const token = localStorage.getItem('token');
    return token == 'undefined' ? defaultToken : token;
  }


  // ...
  public async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    let user = await this.user();
    let isAuthnticated = !this.jwtHelper.isTokenExpired(token) && user.id !== undefined;

    return isAuthnticated;
  }

  public async user(): Promise<any> {
    const userString = await localStorage.getItem('user');
    const user = await JSON.parse(userString);
    return user === null ? {} : user;
  }

  public async createAuthSession(user){
    localStorage.setItem('token', user.uiid_token);
    localStorage.setItem('user', JSON.stringify(user));


    return true;
  }

  public async destroyAuthSession(){
    await localStorage.setItem('token',defaultToken);
    await localStorage.removeItem('user');
  }

  public async logout(){
    this.destroyAuthSession();
  }

  public async authentication(user:any) {
       return await this.authenticate(user)
  }


  private async authenticate(user:any){
    return await this.http.post(this.constserverUrl + 'authentication/login', user).toPromise()
/*

      .subscribe(
        data => {this.createAuthSession(user)},
        err => {
          console.log(err)
        }
      );*/
    return {};

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

