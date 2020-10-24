import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(!this.jwtHelper.isTokenExpired(token));
    });
    return promise;
  }
}
