import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  private calculatorUrl = 'http://mlncalc.ddns.net:5432/mln2';

  getDiff(swing_param: string, pitch_param: string): Promise<string> {
    return this.http.get(this.calculatorUrl, {
      params: {
        batter_stats: '5|5|5|5|R',
        pitcher_stats: '2|2|2|2|L',
        swing: swing_param,
        pitch: pitch_param
      },
      observe: 'response'
    })
      .toPromise()
      .then(value => {
        console.log(value);
        return value.body.toString();
      });
  }
}
