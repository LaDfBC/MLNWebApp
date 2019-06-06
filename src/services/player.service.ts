import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../app/objects/player';
import {map} from 'rxjs/operators';

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

  /**
   * Fetches all players that belong to a certain team, represented by the abbrevation.
   *
   * @param team_abbreviation Abbreviation of the team whose players we are fetching
   */
  getByTeam(team_abbreviation: string): Promise<Player[]> {
    return this.http.get<Player[]>(this.playerServiceUrl + '/getByTeam', {
      params: {
        team_abbreviation: team_abbreviation
      },
      observe: 'response'
    })
      .pipe(map(res => res))
      .toPromise()
      .then(data => data.body);
  }
}
