import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { WatchListService } from 'src/app/core/services/watch-list.service';

@Component({
  selector: 'app-mostview-box',
  templateUrl: './mostview-box.component.html',
  styleUrls: ['./mostview-box.component.scss'],
})
export class MostviewBoxComponent implements OnInit {
  topAnime;
  filter = 'score';
  constructor(
    private animeService: AnimeService,
    public watchListService: WatchListService
  ) {}

  ngOnInit(): void {
    this.animeService.getTopAnime().subscribe((p: Params) => {
      this.topAnime = p.data;
      this.topAnime.sort(this.dynamicSort(`${this.filter}`));
      this.topAnime = this.topAnime.slice(0, 10);
    });
  }
  changeFilter(e) {
    this.filter = e.getAttribute('value');
    this.topAnime.sort(this.dynamicSort(`${this.filter}`));
    this.topAnime = this.topAnime.slice(0, 10);
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
