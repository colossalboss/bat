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
      image: '',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'Gerrald',
      image: '',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 20,
      Comment: 8,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'Colossal',
      image: '',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'ColossalBoss',
      image: '',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
      streak: ['W', 'L', 'D', 'W', 'W', 'D', 'D', 'L', 'L']
    },
    {
      username: 'DBoss',
      image: '',
      // tslint:disable-next-line:max-line-length
      thought: 'I am sure of that nothing can change, it is a fact of life that man utd can never earn a point against chelsea, I assure you',
      likes: 40,
      Comment: 80,
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
