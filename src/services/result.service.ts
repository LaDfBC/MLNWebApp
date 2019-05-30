import { Injectable } from '@angular/core';
import {Player} from '../app/objects/player';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Result} from '../app/objects/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  private resultServiceUrl = 'http://165.227.15.36:5000/results';
  // private resultServiceUrl = 'http://localhost:5000/results';

  getByPitcher(input_pitcher_name: string): Promise<Result[]> {
    return this.http.get<Result[]>(this.resultServiceUrl + '/getByPitcher', {
      params: {
        pitcher_name: input_pitcher_name
      },
      observe: 'response'
    })
      .pipe(map(res  => res))
      .toPromise()
      .then(data => data.body);
  }
}
