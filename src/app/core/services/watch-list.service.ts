import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private watchList = [];

  constructor() {
    let savedWatchList = localStorage.getItem('watchList');
    if (savedWatchList) {
      this.watchList = JSON.parse(savedWatchList);
    }
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
