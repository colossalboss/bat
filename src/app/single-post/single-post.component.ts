import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  posts = [
    {
      username: 'Godstar',
      image: 'user.jpg',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      id: 1,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'Gerrald',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 20,
      Comment: 8,
      image: 'user.jpg',
      id: 2,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'Colossal',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      image: 'user.jpg',
      id: 3,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'ColossalBoss',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      image: 'user.jpg',
      id: 4,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'DBoss',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      image: 'user.jpg',
      id: 5,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    }
  ];

  userDetails;


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.brodCast.subscribe(broadCast => this.userDetails = broadCast);
    const firstname = this.userDetails.name.split(' ')[0];
    this.posts.forEach(obj => {
      obj.username = firstname;
      obj.image = this.userDetails.photoUrl;
    });
  }

}
