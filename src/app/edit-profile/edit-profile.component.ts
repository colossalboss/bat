import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, NgForm} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SignupComponent} from '../signup/signup.component';
import {ProfileDetails} from '../profile-details';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  myImage;
  name = new FormControl('', [Validators.required, Validators.minLength(6)]);
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  animal: string;

  profileDetails: ProfileDetails;


  // constructor(public dialog: MatDialog) { }
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<EditProfileComponent>) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit(form: any) {
    console.log('submitted');
    console.log(form);
    console.log(this.name.value);

    this.profileDetails = {
      name: this.name.value,
      email: this.email.value,
      username: this.username.value,
      location: this.location.value,
      image: this.myImage,
      phone: this.phone.value,
      password: this.password.value
    };

    console.log(this.profileDetails, 'details');
    this.onClose();
  }

  onClose() {
    console.log('closed');
    this.dialogRef.close(this.profileDetails);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
