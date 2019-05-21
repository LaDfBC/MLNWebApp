import { Component, OnInit } from '@angular/core';
import { CalculatorService} from '../../services/calculator.service';
import {PlayerService} from '../../services/player.service';
import {Player} from '../objects/player';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  swing: string;
  pitch: string;
  diff: string;
  result: string;
  selectedPlayer: Player;
  selectedPitcher: Player;
  playerMap: Player[];
  pitcherMap: Player[];
  // selectedPlayer: Player;

  constructor(private calculatorService: CalculatorService,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.diff = '10';
    this.playerService.getAll().then(data => {
        this.playerMap = data;
        this.pitcherMap = data;
        this.selectedPlayer = this.playerMap[0];
        this.selectedPitcher = this.pitcherMap[0];
      }
    );
  }

  getDiff(swing: string, pitch: string): void {
    this.calculatorService.getDiff(swing,
                                   pitch,
                                   this.buildStatString(this.selectedPlayer, false),
                                   this.buildStatString(this.selectedPitcher, true))
      .then(value => {
        const split_value = value.split('|');
        console.log(value);
        this.diff = split_value[0];
        this.result = split_value[1];
      });
  }

  playerChanged(event): void {
    console.log(event.target);
    this.selectedPlayer = event.target.data;
  }

  buildStatString(player: Player, isPitcher: boolean): string {
    if (isPitcher) {
      return player.movement + '|' + player.command + '|' + player.velocity + '|' + player.awareness + '|' + player.hand;
    }

    return player.contact + '|' + player.eye + '|' + player.power + '|' + player.speed + '|' + player.hand;
  }
}
