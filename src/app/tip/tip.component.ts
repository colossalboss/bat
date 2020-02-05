import { Component, OnInit } from '@angular/core';
import {TipsModel} from '../tips.model';
import {TipsService} from '../tips.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  picks = [
    {
      title: '1 X 2',
      options: ['Home', 'Draw', 'Away' ]
    },
    {
      title: 'Overs',
      options: ['Over 2.5', 'Under 2.5' ]
    },
    {
      title: 'Both teams to score',
      options: ['Yes', 'No' ]
    },
    {
      title: 'Correct Score',
      options: ['1 - 0', '0 - 1' ]
    }
  ];

  broadCast: TipsModel;
  fixture: string;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);
    this.fixture = this.broadCast.fixture;
  }

  predict(x: string): void {
    console.log('Predicted');
    console.log(x);
    this.broadCast.verdict = x;
    this.tipsService.updateBroadCast(this.broadCast);
  }
}
