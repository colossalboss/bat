import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

}
