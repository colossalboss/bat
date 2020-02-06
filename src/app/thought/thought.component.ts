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
  }

  onSubmit(): void {
    this.broadCast.thought = this.text;
    this.tipsService.updateBroadCast(this.broadCast);

    const isValid = this.broadCast.country && this.broadCast.league && this.broadCast.fixture && this.broadCast.verdict ? true : false;
    if (isValid) {
      this.tipsService.broadCast.subscribe(broadCast => this.broadCast = broadCast);
      this.broadCast.thought = this.text;
      this.tipsService.updateBroadCast(this.broadCast);
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['post']);
    }

  }

}
