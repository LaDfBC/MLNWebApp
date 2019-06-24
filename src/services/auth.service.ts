import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Player} from '../app/objects/player';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loginServiceUrl = 'http://165.227.15.36:5000/login';
  // private playerServiceUrl = 'http://localhost:5000/player';

  tryLogin(username: string, password: string): Promise<boolean> {
    // Quick and easy way to make a JSON object
    const jsonBody = {
      'username': username,
      'password': password
    };
    return this.http.post<boolean>(this.loginServiceUrl + '/tryLogin', jsonBody, {observe: 'response'})
      .pipe(map(res  => res))
      .toPromise()
      .then(data => {
        return data.status === 200;
      });
  }

  addUserForExistingPlayer(username: string, email: string, password: string, player_id: string): Promise<boolean> {
    // Quick and easy way to make a JSON object
    const jsonBody = {
      'username': username,
      'email' : email,
      'password': password,
      'player_id': player_id
    };
    return this.http.post<boolean>(this.loginServiceUrl + '/createUser', jsonBody, {observe: 'response'})
      .pipe(map(res  => res))
      .toPromise()
      .then(data => {
        return data.status === 200;
      });
  }

  addUserAndPlayer(username: string, email: string, password: string, player: Player): Promise<boolean> {
    // Quick and easy way to make a JSON object
    const jsonBody = {
      'username': username,
      'email' : email,
      'password': password,
      'player_id': {
        'primary_position': player.primary_position,
        'secondary_position': player.secondary_position,
        'player_name': player.full_player_name,
        'discord_name': player.discord_username,
        'reddit_name': player.reddit_username,
        'awareness': player.awareness,
        'velocity' : player.velocity,
        'movement' : player.movement,
        'command' : player.command,
        'contact' : player.contact,
        'eye' : player.eye,
        'power' : player.power,
        'speed' : player.speed
      }
    };
    return this.http.post<boolean>(this.loginServiceUrl + '/createUser', jsonBody, {observe: 'response'})
      .pipe(map(res  => res))
      .toPromise()
      .then(data => {
        return data.status === 200;
      });
  }
}
