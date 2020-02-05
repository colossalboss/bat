import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.css']
})
export class HomePostComponent implements OnInit {

  posts = [
    {
      username: 'Godstar',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'Gerrald',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 20,
      Comment: 8,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'Colossal',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'ColossalBoss',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'DBoss',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
