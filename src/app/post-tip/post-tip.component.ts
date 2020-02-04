import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
