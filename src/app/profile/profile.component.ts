import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {Router, Routes, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  animal: any;
  name: string;

  constructor(public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['posts'], {relativeTo: this.route});
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    const dialogRef = this.dialog.open(EditProfileComponent, dialogConfig);
    // const dialogRef = this.dialog.open(EditProfileComponent, {
    //   width: '60%',
    //   data: {name: this.name, animal: this.animal},
    //   disableClose: true
    // });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

  showPosts() {
    this.router.navigate(['posts'], {relativeTo: this.route});
  }

  showMedia() {
    this.router.navigate(['media'], {relativeTo: this.route});
  }

}
