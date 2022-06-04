import { Injectable } from '@angular/core';
import { Anime } from '../model/app.model';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private watchList = [];
  private continuesWatch: Anime;
  constructor() {
    let savedWatchList = localStorage.getItem('watchList');
    if (savedWatchList) {
      this.watchList = JSON.parse(savedWatchList);
    }
    let savedContinuesWatch = localStorage.getItem('continuesWatch');
    if (savedContinuesWatch) {
      this.continuesWatch = JSON.parse(savedContinuesWatch);
    }
  }
  addToContinuesWatch(p) {
    this.continuesWatch = p;
    localStorage.setItem('continuesWatch', JSON.stringify(this.continuesWatch));
  }
  getToContinuesWatch() {
    return this.continuesWatch;
  }
  addToWatchList(p) {
    let index = this.watchList.findIndex((c) => c.mal_id == p.mal_id);
    if (index == -1) {
      this.watchList.push(p);
    }
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }
  updateToWatchList(p) {
    this.watchList = p;
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }
  getWatchList() {
    return this.watchList;
  }

  removeWatchListItem(p) {
    let index = this.watchList.findIndex((c) => c.mal_id == p.mal_id);
    if (index >= 0) {
      this.watchList.splice(index, 1);
    }
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }
}
