import { Component, OnInit } from '@angular/core';
import {TipsService} from '../tips.service';
import {TipsModel} from '../tips.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues = [
    'Premier League',
    'Championship',
    'League 1',
    'League 2',
    'Premier League 2',
    'National'
  ];

  constructor(private tipsService: TipsService, private router: Router) { }

    broadCast: TipsModel;

  ngOnInit() {
  }

  getNext(league): void {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);
    this.broadCast.league = league;
    console.log(this.broadCast);
    this.tipsService.updateBroadCast(this.broadCast);
    console.log(this.broadCast);
    this.router.navigate(['fixtures']);
  }
}
