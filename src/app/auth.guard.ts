import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public broadCast;
  constructor(private router: Router, private loginService: LoginService) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean  {

      this.loginService.brodCastMessage.subscribe((broadCast: any) => this.broadCast = broadCast);
      if (this.broadCast) {
        return this.broadCast;
      } else {
        this.router.navigate(['login']);
        return this.broadCast;
      }
  }

}
