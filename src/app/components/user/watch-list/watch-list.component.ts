import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/core/services/anime.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export class WatchListComponent implements OnInit {
  public watchList;
  public filter;
  constructor(private watchListService: WatchListService) {}

  ngOnInit(): void {
    this.watchList = this.watchListService.getWatchList();
    this.watchList.map((item) => {
      if (item.statusWatchList) {
      } else {
        item.statusWatchList = '';
      }
    });
    this.filter = this.watchList;
    console.log(this.watchList);
  }
  removeItem(e) {
    this.watchListService.removeWatchListItem(e);
  }
  changeStatus(e) {
    let index = this.watchList.findIndex((c) => c.mal_id == e[1].mal_id);
    this.watchList[index].statusWatchList = e[0];
    this.watchListService.updateToWatchList(this.watchList);
    this.filter = this.watchList;
  }
  showStatusView(e) {
    this.watchList = this.watchListService.getWatchList();
    this.filter = this.watchList;
    this.filter = this.filter.filter((item) => item.statusWatchList == e);
  }
  showAll() {
    this.filter = this.watchList;
  }
}
