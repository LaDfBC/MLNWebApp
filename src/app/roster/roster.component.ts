import { Component, OnInit } from '@angular/core';
import {Team} from '../objects/team';
import {Player} from '../objects/player';
import {PlayerService} from '../../services/player.service';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  teamList: Team[];
  selectedTeam: Team;
  positionPlayerList: Player[];
  pitcherList: Player[];
  positionPlayerColumns: String[] =
    ['full_player_name', 'reddit_username', 'discord_username', 'primary_position', 'hand', 'contact', 'eye', 'power', 'speed'];
  pitcherColumns: String[] =
    ['full_player_name', 'reddit_username', 'discord_username', 'primary_position', 'hand', 'movement', 'command', 'velocity', 'awareness'];

  constructor(private playerService: PlayerService,
              private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAll().then( data => {
      this.teamList = data;
      this.selectedTeam = this.teamList[0];
      this.getPlayers(this.teamList[0].team_abbreviation);
    });
  }

  getPlayers(team_name: string): void {
    const temp_player_list: Player[] = [];
    const temp_pitcher_list: Player[] = [];

    this.playerService.getByTeam(team_name)
      .then(data => {
        let i: number;
        for (i = 0; i < data.length; i++) {
          const currentPlayer: Player = data[i];
          if (currentPlayer.primary_position === 'p' || currentPlayer.primary_position === 'P') {
            temp_pitcher_list.push(currentPlayer);
          } else {
            temp_player_list.push(currentPlayer);
          }
        }

        this.positionPlayerList = temp_player_list;
        this.pitcherList = temp_pitcher_list;
      });
  }

}


