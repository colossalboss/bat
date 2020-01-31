import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment;

  // constructor(public dialog: MatDialog) { }
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<CommentComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('submitted');
    this.comment = form.value;
    console.log(this.comment);

    this.onClose();
  }

  onClose() {
    console.log('closed');
    this.dialogRef.close(this.comment);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
