import { Component, OnInit } from '@angular/core';
import {Player} from '../objects/player';
import {PlayerService} from '../../services/player.service';
import {ResultService} from '../../services/result.service';
import {Result} from '../objects/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  pitcherList: Player[];
  selectedPitcher: Player;
  resultList: Result[];
  displayedColumns: String[] = ['pitcher', 'pitch', 'result', 'opponent'];

  constructor(private playerService: PlayerService,
              private resultService: ResultService) { }

  ngOnInit() {
    this.playerService.getAll().then(data => {
        this.pitcherList = data;
        this.selectedPitcher = this.pitcherList[0];
      }
    );
  }

  getResults(pitcher_name: String): void {
    this.resultService.getByPitcher(pitcher_name)
      .then(data => {
        this.resultList = data;
      });
  }

}
