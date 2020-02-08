import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {CommentService} from '../comment.service';


@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.css']
})
export class HomePostComponent implements OnInit {

  posts;

  comments;

  constructor(private router: Router, private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.broadCast.subscribe(broadCast => this.posts = broadCast);
  }

  like(event, id): void {
    const elem = event.target;
    const targetObj = this.posts.find(obj => obj.id === id);
    if (event.target.classList.contains('liked')) {
      event.target.classList.remove('liked');
      targetObj.likes -= 1;
      console.log(typeof this.posts.likes);
      console.log('reduced');

    } else {
      event.target.classList.add('liked');
      targetObj.likes += 1;
      console.log('increased');
      console.log(typeof this.posts.likes);

    }
  }

}
