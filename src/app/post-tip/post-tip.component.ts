import { Component, OnInit } from '@angular/core';
import {TipsService} from '../tips.service';
import {TipsModel} from '../tips.model';
import {Router} from '@angular/router';

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

  constructor(private router: Router, private tipsService: TipsService) { }

  ngOnInit() {

  }

  getNext(country): void {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);
    this.tipsObj.country = country;
    console.log(this.broadCast);
    this.broadCast = this.tipsObj;
    this.tipsService.updateBroadCast(this.broadCast);
    console.log(this.broadCast);
    this.router.navigate(['leagues']);
  }

}
