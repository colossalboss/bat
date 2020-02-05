import { Component, OnInit } from '@angular/core';
import {TipsService} from '../tips.service';
import {TipsModel} from '../tips.model';

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

  constructor(private tipsService: TipsService) { }

    broadCast: TipsModel;

  ngOnInit() {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);
    console.log('Hey');
    console.log(this.broadCast);
  }


}
