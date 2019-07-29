import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})


export class IndexedDbService {
  private db: NgxIndexedDB;
  private LOGGED_IN_NAME = 'isLoggedIn';
  private PLAYER_KEY_NAME = 'username';

  constructor() { }

  createDatabase(databaseName: string) {
    this.db = new NgxIndexedDB(databaseName, 1);
    this.db.openDatabase(1, evt => {
      const objectStore = evt.currentTarget.result.createObjectStore('people', { keyPath: 'id', autoIncrement: true });

      objectStore.createIndex(this.LOGGED_IN_NAME, this.PLAYER_KEY_NAME, { unique: false });
    });
  }

  signPlayerIn(username: string): Promise<string> {
    return this.db.add(this.LOGGED_IN_NAME, true, username);
  }

  isPlayerSignedIn(username: string): boolean {
    this.db.getByKey(this.LOGGED_IN_NAME, username).then(
      (fetchedValue) => {
        return fetchedValue;
      }, error => {
        console.log(error);
        return false;
      }
    );
  }
}
