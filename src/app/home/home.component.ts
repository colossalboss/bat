import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {PostDetails} from '../post-details';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material';
import {CommentComponent} from '../comment/comment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  message;
  file;
  post: PostDetails = {
    message: '',
    file: ''
  };

  comment;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleDisplay(event) {
    const left = document.querySelector('#sidebar1');
    const right = document.querySelector('#sidebar2');
    console.log(event.target.classList);
    if (event.target.classList.contains('left')) {
      left.classList.toggle('open');
    } else {
      right.classList.toggle('open');
      console.log('hi');
    }
  }

  onSubmit(form: NgForm) {
    this.post.message = form.value.message;
    this.post.file = form.value.file;
    console.log(this.post);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '98%';

    const dialogRef = this.dialog.open(CommentComponent, dialogConfig);
    // const dialogRef = this.dialog.open(EditProfileComponent, {
    //   width: '60%',
    //   data: {name: this.name, animal: this.animal},
    //   disableClose: true
    // });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.comment = result;
      console.log(this.comment);
    });
  }
}
