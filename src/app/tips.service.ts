import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TipsModel} from './tips.model';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  tipsObj: TipsModel = {
    country: '',
    league: '',
    fixture: '',
    verdict: '',
    thought: '',
  };

  private broadcastMessage = new BehaviorSubject(this.tipsObj);
  broadCast = this.broadcastMessage.asObservable();

  constructor() { }

  updateBroadCast(newMessage: TipsModel): void {
    this.broadcastMessage.next(newMessage);
  }
}
