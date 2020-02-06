import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userDetails = {
    id: "",
    name: "",
    email: '',
    photoUrl: '',
    authToken: '',
    provider: ''
  };

  private details = new BehaviorSubject(this.userDetails);
  private signed = new BehaviorSubject(false);

  brodCast = this.details.asObservable();
  brodCastMessage = this.signed.asObservable();

  constructor() { }

  updateUserDetails(value): void {
    this.details.next(value);
  }

  updateBroadCastMessage(value): void {
    this.signed.next(value);
  }
}
