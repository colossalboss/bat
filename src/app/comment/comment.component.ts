import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  post;
  allPosts;
  comment;
  boxVisible = false;

  constructor(private commentService: CommentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log(id + ' logging');

    this.commentService.broadCast.subscribe(broadCast => {
      console.log(broadCast);
      this.allPosts = broadCast;
      this.post = broadCast.find(res => res.id === Number(id));
    });
  }

  onSubmit(form: any) {
    console.log('submitted');
    this.comment = form.value;
    console.log(this.comment);

  }

  showBox(): void {
    if (this.boxVisible === true) {
      this.boxVisible = false;
    } else {
      this.boxVisible = true;
    }
  }


}
