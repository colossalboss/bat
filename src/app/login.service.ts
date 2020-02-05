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

brodCast = this.details.asObservable();
  constructor() { }

  updateUserDetails(value): void {
    this.details.next(value);
  }
}
