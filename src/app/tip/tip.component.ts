import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  tips = [
    '1',
    'X',
    '2',
    'Over 2.5',
    'BTS Yes',
    'BTS No'
  ];

  constructor() { }

  ngOnInit() {
  }

}
