import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';


import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bat-ui';

  show: boolean;
  user: any;

  // tslint:disable-next-line:variable-name
  constructor(private _socioAuthServ: AuthService) { }

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
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }
}
