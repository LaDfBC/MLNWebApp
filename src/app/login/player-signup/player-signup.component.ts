import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Player} from '../../objects/player';
import apply = Reflect.apply;

@Component({
  selector: 'app-player-signup',
  templateUrl: './player-signup.component.html',
  styleUrls: ['./player-signup.component.css', '../login.component.css', '../../app.component.css']
})

export class PlayerSignupComponent implements OnInit {
  private movementContactGeneric = '(Affects K and 1B)';
  private commandEyeGeneric = '(Affects BB and 1B)';
  private velocityPowerGeneric = '(Affects HR, PO, and FO)';
  private awarenessSpeedGeneric = '(Affects 1B, 2B, 3B, GO, SB)';

  private positionList = [
    {name: 'Catcher'},
    {name: 'First Base'},
    {name: 'Second Base'},
    {name: 'Third Base'},
    {name: 'Shortstop'},
    {name: 'Left Field'},
    {name: 'Center Field'},
    {name: 'Right Field'},
    {name: 'Pitcher'},
  ];

  private secondaryPositionList = [
    {name: 'UTIL'},
    {name: 'Catcher'},
  ];

  private handedness = [
    {name: 'Right'},
    {name: 'Left'},
    {name: 'Switch'}
  ];

  // private statValues = [{val: 1}, {val: 2}, {val: 3}, {val: 4}, {val: 5}];
  private statValues = [1, 2, 3, 4, 5];

  constructor(private authService: AuthService) {}

  showSecond = true;
  total: number;
  totalEqualsTwelve = false;
  isPitcher: boolean;
  isInfieldNotCatcher: boolean;
  redditUsername: string;
  playerName: string = null;
  selectedHand: string = null;
  position: string = null;
  secondaryPosition: string = null;

  velocity: string;
  awareness: string;
  command: string;
  movement: string;

  velocityVal: number;
  awarenessVal: number;
  commandVal: number;
  movementVal: number;

  missingPlayername = false;
  missingHand = false;
  missingPosition = false;
  missingSecondary = false;

  ngOnInit() {
  }

  private updatePosition() {
    if (this.position === 'Pitcher') {
      this.isPitcher = true;
      this.isInfieldNotCatcher = false;
      // tslint:disable-next-line:max-line-length
    } else if (this.position === 'First Base' || this.position === 'Second Base' || this.position === 'Third Base' || this.position === 'Shortstop') {
      this.isPitcher = false;
      this.isInfieldNotCatcher = true;
    } else {
      this.isPitcher = false;
      this.isInfieldNotCatcher = false;
    }
  }

  private setAwareness(): void {
    if (this.isPitcher) {
      this.awareness = 'Awareness: ' + this.awarenessSpeedGeneric;
    } else {
      this.awareness = 'Speed: ' + this.awarenessSpeedGeneric;
    }
  }

  private setVelocity(): void {
    if (this.isPitcher) {
      this.velocity = 'Velocity: ' + this.velocityPowerGeneric;
    } else {
      this.velocity = 'Power: ' + this.velocityPowerGeneric;
    }
  }

  private setCommand(): void {
    if (this.isPitcher) {
      this.command = 'Command: ' + this.commandEyeGeneric;
    } else {
      this.command = 'Eye: ' + this.commandEyeGeneric;
    }
  }

  private setMovement(): void {
    if (this.isPitcher) {
      this.movement = 'Movement: ' + this.movementContactGeneric;
    } else {
      this.movement = 'Contact: ' + this.movementContactGeneric;
    }
  }

  private setTotal(): void {
    this.total = this.awarenessVal + this.velocityVal + this.commandVal + this.movementVal;

    this.totalEqualsTwelve = (this.total === 12);
  }

  trySignup(): void {
    let playerInCreation: Player;
    playerInCreation.full_player_name = this.playerName;
    playerInCreation.player_stats_name = this.playerName;
    playerInCreation.reddit_username = this.redditUsername;
    playerInCreation.discord_username = this.discordUsername;
    playerInCreation.primary_position = this.position;
    playerInCreation.secondary_position = this.secondaryPosition;
    playerInCreation.hand = this.selectedHand;

    if (this.isPitcher) {
      playerInCreation.movement = this.movementVal;
      playerInCreation.velocity = this.velocityVal;
      playerInCreation.awareness = this.awarenessVal;
      playerInCreation.command = this.commandVal;
    } else {
      playerInCreation.contact = this.movementVal;
      playerInCreation.speed = this.awarenessVal;
      playerInCreation.power = this.velocityVal;
      playerInCreation.eye = this.commandVal;
    }

    this.authService.addUserAndPlayer(this.redditUsername, this.email, this.password, playerInCreation)
      .then({
        this.this.authServic
      })
      .catch()
  }

  switchToSecond() {
    this.missingHand = false;
    this.missingPosition = false;
    this.missingSecondary = false;
    this.missingPlayername = false;

    if (this.selectedHand == null) {
      this.missingHand = true;
    }

    if (this.position == null) {
      this.missingPosition = true;
    } else if (this.isInfieldNotCatcher) {
      if (this.secondaryPosition == null) {
        this.missingSecondary = true;
      }
    }

    if (this.playerName == null) {
      this.missingPlayername = true;
    }

    // tslint:disable-next-line:max-line-length
    if (this.missingPlayername === false && this.missingHand === false && this.missingPosition === false && this.missingSecondary === false) {
      this.showSecond = !this.showSecond;
      this.movementVal = 1;
      this.velocityVal = 1;
      this.commandVal = 1;
      this.awarenessVal = 1;
      this.total = 4;
      this.setAwareness();
      this.setVelocity();
      this.setCommand();
      this.setMovement();
    }
  }
}
