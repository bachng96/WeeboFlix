import { AnimeService } from 'src/app/core/services/anime.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/model/app.model';
import { dynamicFilterByType } from '../../share/functionReuseble';

@Component({
  selector: 'app-view-more-list',
  templateUrl: './view-more-list.component.html',
  styleUrls: ['./view-more-list.component.scss'],
})
export class ViewMoreListComponent implements OnInit {
  animes: Anime[];
  listAnimeDisplayBig: Anime[];
  listAnimeDisplayMedium: Anime[];
  pagination;
  page = 1;
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.pagination = p.pagination;
      console.log(this.pagination);

      if (p.type == 'new') {
        this.animeService.getAllAnime().subscribe((data: Params) => {
          this.animes = data.data;
          this.animes.sort(this.dynamicSort('favorites'));
          this.listAnimeDisplayBig = this.animes.slice(0, 4);
          this.listAnimeDisplayMedium = this.animes.slice(4, 25);
        });
      } else if (p.type == 'lastest') {
        this.animeService.getAllAnime().subscribe((data: Params) => {
          this.animes = data.data;
          this.listAnimeDisplayBig = this.animes.slice(0, 4);
          this.listAnimeDisplayMedium = this.animes.slice(4, 25);
        });
      } else if (p.type == 'upcoming') {
        this.animeService.getAllAnime().subscribe((data: Params) => {
          this.animes = data.data;
          this.animes.sort(this.dynamicSort('score'));
          this.listAnimeDisplayBig = this.animes.slice(0, 4);
          this.listAnimeDisplayMedium = this.animes.slice(4, 25);
        });
      }
    });
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  logPage() {
    this.animeService.getAllAnime().subscribe((data: Params) => {
      this.listAnimeDisplayMedium = data.data.slice(4, 25);
      this.listAnimeDisplayBig = data.data.slice(0, 4);
    });
  }
}
