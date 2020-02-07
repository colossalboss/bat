import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checked = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  /* TODO */
  // Share user with other components
  user: any;



  // tslint:disable-next-line:variable-name
  constructor(private _socioAuthServ: AuthService, private route: Router, private loginService: LoginService) { }


  ngOnInit() {
    console.log(this.checked);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  // Method to sign in with google.
  singIn(platform: string): void {
    console.log('Sign in starts');

    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + ' logged in user data is= ' , response);
        if (response) {
          this.loginService.updateUserDetails(response);
          this.loginService.updateBroadCastMessage(true);
          console.log('Signed In Worked');
          this.route.navigate(['home']);
        }
        this.user = response;
        // if (this.user) {
        //   this.loginService.updateUserDetails(response);
        //   this.loginService.updateBroadCastMessage(true);
        // }
      }
    );
  }

  // Method to log out.
  signOut(event): void {
    event.preventDefault();
    console.log('Sign out starts');

    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

}
