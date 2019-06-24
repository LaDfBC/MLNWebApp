import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {PlayerService} from '../../../services/player.service';
import {Player} from '../../objects/player';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css', '../login.component.css', '../../app.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService,
              private playerService: PlayerService) { }
  signInSuccessful: boolean;

  // Values
  username: string;
  email: string;
  password = '';
  repeatPassword = '';
  player_id: string;

  // Validation Checks
  validPasswords = true;
  invalidUsername = false;

  playerList: Player[];
  selectedPlayer: Player;

  ngOnInit() {
    this.playerService.getAll().then(data => {
        this.playerList = data;
        this.selectedPlayer = this.playerList[0];
      }
    );
  }

  private trySignup(): void {
    this.passwordsMatch();
    this.fieldsNotEmpty();

    if (this.validPasswords && !this.invalidUsername) {
      this.authService.addUserForExistingPlayer(this.username, this.email, this.password, this.player_id)
        .then(res => this.signInSuccessful = res);
    }
  }

  private passwordsMatch(): void {
    if (this.password.length === 0 || this.repeatPassword.length === 0) {
      this.validPasswords = false;
    } else {
      this.validPasswords = this.password === this.repeatPassword;
    }
  }

  private fieldsNotEmpty(): void {
    this.invalidUsername = !(this.username === null || this.username === '');
  }
}
