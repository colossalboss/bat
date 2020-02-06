import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';


import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginService} from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bat-ui';

  show: boolean;
  user: any;
  signedIn: boolean = false;

  // tslint:disable-next-line:variable-name
  constructor(private _socioAuthServ: AuthService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.brodCastMessage.subscribe(broadCast => this.signedIn = broadCast);
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

  hide(nf): void {
    if (nf.classList.contains('show')) {
      nf.classList.remove('show');
    }
  }
}
