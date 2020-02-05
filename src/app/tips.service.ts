import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TipsModel} from './tips.model';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  tipsObj: TipsModel = {
    country: 'Nigeria',
    league: 'NPL',
    fixture: 'Enyimba vs Sharks',
    verdict: 'Nigeria',
    thought: 'Nigeria',
  };

  private broadcastMessage = new BehaviorSubject(this.tipsObj);
  broadCast = this.broadcastMessage.asObservable();

  constructor() { }

  updateBroadCast(newMessage: TipsModel): void {
    this.broadcastMessage.next(newMessage);
  }
}
