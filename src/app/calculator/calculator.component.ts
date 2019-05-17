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
      }
    );
  }

  getDiff(swing: string, pitch: string): void {
    this.calculatorService.getDiff(swing, pitch)
      .then(value => {
        const split_value = value.split(',');
        this.diff = split_value[2];
        this.result = split_value[3];
      });
  }
}
