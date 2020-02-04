import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
