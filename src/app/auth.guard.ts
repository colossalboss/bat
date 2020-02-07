import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from 'angular4-social-login';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public loggedIn: Observable<boolean>;
  constructor(private authService: AuthService, private router: Router, private loginService: LoginService) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean  {

      this.loginService.brodCastMessage.subscribe((broadCast: any) => this.loggedIn = broadCast);
      if (this.loggedIn) {
        return this.loggedIn;
      } else {
        this.router.navigate(['login']);
        return this.loggedIn;
      }
  }

  checkLogin(): boolean {

    return true;
  }

}
