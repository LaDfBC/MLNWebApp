import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import {Router} from '@angular/router';
import {userError} from '../../../node_modules/@angular/compiler-cli/src/transformers/util';

// export const authConfig: AuthConfig = {
//   issuer: 'http://authserver-master-1.cloud.dev:8200/oauth2/oauth/token',
//   clientId: 'preferences-ui',
//   showDebugInformation: true,
//   skipIssuerCheck: true,
//   scope: 'openid access_preferences',
//   loginUrl: 'localhost:4200',
//   tokenEndpoint: 'http://authserver-master-1.cloud.dev:8200/oauth2/oauth/token',
//   oidc: false,
//   disableAtHashCheck: true,
//   requireHttps: false
// };

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  public username = '';
  public password = '';
  public testResults: string;

  constructor(private location: Location,
              private router: Router) {
  }

  ngOnInit() {
  }

  public login() {
    // Starts the OAuth login process, fetching a token
    // this.authService.login(this.username, this.password)
    //   .then(
    //     value => { this.testResults = 'Success!';
    //       this.router.navigateByUrl('/dashboard'); })
    //   .catch(value => { this.testResults = 'Failed! Try again...Error Code: ' + value.status; });
  }

  goBack(): void {
    this.location.back();
  }
}
