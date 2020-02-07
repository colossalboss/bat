import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {UserPostsComponent} from './user-posts/user-posts.component';
import {UserMediaComponent} from './user-media/user-media.component';
import {TrendsComponent} from './trends/trends.component';
import {StandingsComponent} from './standings/standings.component';
import {ThreadComponent} from './thread/thread.component';
import {CommentComponent} from './comment/comment.component';
import {PostTipComponent} from './post-tip/post-tip.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {FixturesComponent} from './fixtures/fixtures.component';
import {TipComponent} from './tip/tip.component';
import {ThoughtComponent} from './thought/thought.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'trends', component: TrendsComponent},
  {path: 'standings', component: StandingsComponent},
  {path: 'post', component: PostTipComponent, canActivate: [AuthGuard]},
  {path: 'single', component: SinglePostComponent},
  {path: 'leagues', component: LeaguesComponent},
  {path: 'tip/thoughts', component: ThoughtComponent},
  {path: 'tip', component: TipComponent},
  {path: 'fixtures', component: FixturesComponent},
  {path: 'profile', component: ProfileComponent,
  children: [
    {path: 'posts', component: UserPostsComponent},
    {path: 'media', component: UserMediaComponent}
  ]
  },
  {path: 'edit', component: CommentComponent},
  {path: 'thread', component: ThreadComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
