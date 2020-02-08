import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  details = {
    postOwner: '',
    post: '',
    image: ''
  };

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

  private post = new BehaviorSubject(this.posts);
  broadCast = this.post.asObservable();

  constructor() { }

  updatePost(value): void {
    this.post.next(value);
  }
}
