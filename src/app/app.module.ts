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
import {MatSelectModule} from '@angular/material/select';


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

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
import { PostTipComponent } from './post-tip/post-tip.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { TipComponent } from './tip/tip.component';
import { PicksComponent } from './picks/picks.component';
import { ThoughtComponent } from './thought/thought.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { HomePostComponent } from './home-post/home-post.component';
import {AuthGuard} from './auth.guard';


// Client id for the google oauth. This is used for validation of our application to google.
// https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin
// tslint:disable-next-line:variable-name
const google_oauth_client_id = '265064482755-hb258ueo3lls178lmg2ds3ivhi9vlkms.apps.googleusercontent.com';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('265064482755-hb258ueo3lls178lmg2ds3ivhi9vlkms.apps.googleusercontent.com')
  }
]);


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
    CommentComponent,
    PostTipComponent,
    LeaguesComponent,
    FixturesComponent,
    TipComponent,
    PicksComponent,
    ThoughtComponent,
    SinglePostComponent,
    HomePostComponent
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
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    SocialLoginModule.initialize(config)
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
