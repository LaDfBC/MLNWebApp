import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { AuthorizationComponent } from './authorization/authorization.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { StatsComponent } from './stats/stats.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsComponent } from './results/results.component';
import { RosterComponent } from './roster/roster.component';
import { LoginComponent } from './login/login.component';
import { PlayerSignupComponent } from './login/player-signup/player-signup.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { CreateUserComponent } from './login/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationComponent,
    StatsComponent,
    CalculatorComponent,
    ResultsComponent,
    RosterComponent,
    LoginComponent,
    PlayerSignupComponent,
    SignInComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
