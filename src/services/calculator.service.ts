import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  private calculatorUrl = 'http://mlncalc.ddns.net:6543/mln';

  getDiff(swing_param: string, pitch_param: string, batter_stats_string: string, pitcher_stats_string: string): Promise<string> {
    return this.http.get(this.calculatorUrl, {
      params: {
        batter_stats: batter_stats_string,
        pitcher_stats: pitcher_stats_string,
        swing: swing_param,
        pitch: pitch_param
      },
      observe: 'response'
    })
      .toPromise()
      .then(value => {
        console.log(value.body);
        const body = value.body;
        const diff = body[2];
        const result = body[3];
        return diff + '|' + result;
      });
  }
}
