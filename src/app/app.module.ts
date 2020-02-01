import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material';





import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserMediaComponent } from './user-media/user-media.component';
import { TrendsComponent } from './trends/trends.component';
import { StandingsComponent } from './standings/standings.component';
import { ThreadComponent } from './thread/thread.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    UserPostsComponent,
    UserMediaComponent,
    TrendsComponent,
    StandingsComponent,
    ThreadComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent, EditProfileComponent]
})
export class AppModule { }

// Clien ID
// 265064482755-hb258ueo3lls178lmg2ds3ivhi9vlkms.apps.googleusercontent.com

// Client Secret
// eLN_HhLkln3g4y2z2PkAC0FS
