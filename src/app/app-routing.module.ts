import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent} from './results/results.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {RosterComponent} from './roster/roster.component';
import {LoginComponent} from './login/login.component';
import {SignInComponent} from './login/sign-in/sign-in.component';
import {PlayerSignupComponent} from './login/player-signup/player-signup.component';
import {CreateUserComponent} from './login/create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full'},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'rosters', component: RosterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/signin', component: SignInComponent},
  { path: 'login/signup', component: PlayerSignupComponent},
  { path: 'login/createuser', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
