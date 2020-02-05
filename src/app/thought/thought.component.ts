import { Component, OnInit } from '@angular/core';
import {TipsService} from '../tips.service';
import {TipsModel} from '../tips.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  broadCast: TipsModel;
  post: string;

  text = 'hduhddi';

  constructor(private tipsService: TipsService, private router: Router) { }

  ngOnInit() {
    this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);
    this.post = this.broadCast.country + ' - ' + this.broadCast.league + ' - ' + this.broadCast.fixture + ' #' + this.broadCast.verdict;
    console.log(this.post);
  }

  onSubmit(): void {
    this.broadCast.thought = this.text;
    this.tipsService.updateBroadCast(this.broadCast);

    this.router.navigate(['/profile']);
  }

}
