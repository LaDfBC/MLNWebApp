import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../login.component.css', '../../app.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) {}

  username: string;
  password: string;
  loginSuccessful: string;

  ngOnInit() {
  }

  tryLogin(username: string, password: string) {
    return this.authService.tryLogin(username, password)
      .then(data => {
        if (!data) {
          this.loginSuccessful = 'Failed to login.  Username or password is incorrect!';
        } else {
          this.loginSuccessful = 'Successful!  Logging in...';
        }
      });
  }
}
