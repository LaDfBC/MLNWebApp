import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewInit {
  data = [];
  chart: Chart;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit(): void {
    this.data.push('101-200', '201-300', '301-400');
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.data,
        datasets: [
          {
            label: 'Ranking',
            data: [6, 0, 7],
            borderColor: '#3cba9f',
            backgroundColor: ['#11628C', '#111111', '#8c329A']
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
