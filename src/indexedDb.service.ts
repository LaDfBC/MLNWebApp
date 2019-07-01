import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  constructor() { }

  private createDatabase(databaseName: string) {
    this.db = new Dexie(databaseName);
  }
}
