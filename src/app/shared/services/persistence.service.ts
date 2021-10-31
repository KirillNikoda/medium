import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set<TData>(key: string, data: TData): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error while saving to local storage: ', e);
      throw e;
    }
  }

  get<TData>(key: string): TData | null {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log('Error while trying to get data from local storage: ', e);
      return null;
    }
  }
}
