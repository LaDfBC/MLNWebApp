import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Team} from '../app/objects/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }

  private teamServiceUrl = 'http://165.227.15.36:5000/team';
  // private teamServiceUrl = 'http://localhost:5000/team';

  getAll(): Promise<Team[]> {
    return this.http.get<Team[]>(this.teamServiceUrl + '/getAll', {observe: 'response'})
      .pipe(map(res => res))
      .toPromise()
      .then(data => data.body);
  }
}
