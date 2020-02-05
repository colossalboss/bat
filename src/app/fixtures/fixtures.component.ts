import { Component, OnInit } from '@angular/core';
import {TipsService} from '../tips.service';
import {TipsModel} from '../tips.model';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  fixtures = [
    'Chelsea vs Leicester',
    'Man Utd vs Wolves',
    'Man City vs Tottenham',
    'Arsenal vs Burley',
    'Liverpool vs Southampton',
    'Crystal Palace vs Sheffield Utd',
    'Westham vs Brighton',
    'Wolves vs Everton',
    'Newcastle vs Norwich',
    'Bournemouth vs Aston Villa',
  ];

  broadCast: TipsModel;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);

    console.log(this.broadCast);
    this.broadCast.verdict = 'Draw';
    this.tipsService.updateBroadCast(this.broadCast);
    console.log(this.broadCast);
  }

}
