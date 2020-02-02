import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checked = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  user: any;



  // tslint:disable-next-line:variable-name
  constructor(private _socioAuthServ: AuthService) { }


  ngOnInit() {
    console.log(this.checked);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSignIn(googleUser) {
    // tslint:disable-next-line:prefer-const
    console.log('Hello');
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  // Method to sign in with google.
  singIn(platform: string): void {
    console.log('Sign in starts');

    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + ' logged in user data is= ' , response);
        this.user = response;
      }
    );
  }

  // Method to log out.
  signOut(): void {
    console.log('Sign out starts');

    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

}
