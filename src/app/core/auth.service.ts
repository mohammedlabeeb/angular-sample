import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { 
    //https://ryanchenkie.com/angular-authentication-using-route-guards
  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
   // return !this.jwtHelper.isTokenExpired(token);
   return false;
  }

}
