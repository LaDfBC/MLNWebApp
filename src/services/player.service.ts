import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Player} from '../app/objects/player';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private playerServiceUrl = 'http://165.227.15.36:5000/player';
  // private playerServiceUrl = 'http://localhost:5000/player';

  getAll(): Promise<Player[]> {
    return this.http.get<Player[]>(this.playerServiceUrl + '/getAll', {observe: 'response'})
      .pipe(map(res  => res))
      .toPromise()
      .then(data => data.body);
  }

  //     .toPromise()
  //     .map((response: Response) => {
  //       return response.json() as Player[];
  //     })
  //     .then(value => {
  //       console.log(value);
  //       const playersToReturn: Player[] = null;
  //       const player: Player = null;
  //       const object: Object = JSON.parse(value.body.toString());
  //
  //       Object.keys(object).map(curr => playersToReturn.push(JSON.parse(curr)));
  //
  //       return playersToReturn;
  //     });
  // }
}
