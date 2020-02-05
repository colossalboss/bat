import { Component, OnInit } from '@angular/core';
import {TipsService} from '../tips.service';
import {TipsModel} from '../tips.model';

@Component({
  selector: 'app-post-tip',
  templateUrl: './post-tip.component.html',
  styleUrls: ['./post-tip.component.css']
})
export class PostTipComponent implements OnInit {

  countries = [
    'England',
    'Spain',
    'Germany',
    'Italy',
    'France',
    'Netherland',
  ];

  tipsObj: TipsModel = {
    country: 'England',
    league: 'EPL',
    fixture: 'Chelsea vs Man Utd',
    verdict: 'Nigeria',
    thought: 'Nigeria',
  };

  broadCast: TipsModel;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);

    console.log(this.broadCast);
    this.broadCast = this.tipsObj;
    this.tipsService.updateBroadCast(this.broadCast);
    console.log(this.broadCast);
  }

}
