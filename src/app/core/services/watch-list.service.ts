import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private watchList = [];
  constructor() {}
  addToWatchList(p) {
    let index = this.watchList.findIndex((c) => c.mal_id == p.mal_id);
    if (index == -1) {
      this.watchList.push(p);
    }
  }
  getWatchList() {
    return this.watchList;
  }
}
