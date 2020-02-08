import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';


import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginService} from './login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bat-ui';

  show: boolean;
  user: any;

  loggedIn;

  // tslint:disable-next-line:variable-name
  constructor(private _socioAuthServ: AuthService, private loginService: LoginService, private router: Router) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.loginService.brodCastMessage.subscribe(response => this.loggedIn = response);
  }

  toggleVissibility(nf) {
    // nf.classList();
    if (nf.classList.contains('show')) {
      nf.classList.remove('show');
    } else {
      nf.classList.add('show');
    }
  }

  // Method to sign in with google.
  singIn(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + ' logged in user data is= ' , response);
        this.user = response;
      }
    );
  }

  // Method to log out.
  signOut(event): void {
    event.preventDefault();
    console.log('Sign out starts');

    this._socioAuthServ.signOut();
    this.user = null;
    this.loginService.updateBroadCastMessage(false);
    this.router.navigate(['login']);
    console.log('User signed out.');
  }

  hide(nf): void {
    if (nf.classList.contains('show')) {
      nf.classList.remove('show');
    }
  }

  onSet() {
    this.loginService.updateBroadCastMessage(true);
  }
}
