import { Injectable } from '@angular/core';
import { Anime } from '../model/app.model';
import { ToastService } from './toast.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private watchList = [];
  private continuesWatch: Anime;
  constructor(
    public toastService: ToastService,
    private userService: UserService
  ) {
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
    if (this.userService.isLogin() == false) {
      this.showDanger(`You must be logged in first`);
    } else {
      let index = this.watchList.findIndex((c) => c.mal_id == p.mal_id);
      if (index == -1) {
        this.watchList.push(p);
        this.showSuccess(`Add ${p.title} to wishlist success !`);
      } else {
        this.showDanger(`${p.title} is already in Watch List !`);
      }
      localStorage.setItem('watchList', JSON.stringify(this.watchList));
    }
  }
  showSuccess(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-danger text-light',
      delay: 3000,
    });
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
      this.showDanger(`Remove anime ${p.title} Success`);
    }
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }
}
