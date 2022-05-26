import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/core/services/anime.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export class WatchListComponent implements OnInit {
  watchList;
  constructor(private watchListService: WatchListService) {}

  ngOnInit(): void {
    this.watchList = this.watchListService.getWatchList();
  }
}
