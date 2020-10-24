import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignedInGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(routh: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Promise<boolean | UrlTree> | Observable<boolean | UrlTree> | boolean {
    return this.auth.isAuthenticated().then((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        return this.router.navigate(['/catalog']);
      }

      return true;
    });
  }
}
