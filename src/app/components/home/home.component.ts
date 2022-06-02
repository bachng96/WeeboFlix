import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Anime, Root } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  animeList: Anime[];
  animeListNew: Anime[];
  animeSlider: Anime[];
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAllAnime().subscribe((data: Params) => {
      console.log(data.data);
      this.animeList = data.data.slice(0, 12);
      this.animeListNew = data.data.slice(12, 24);
      this.animeSlider = data.data;
      this.animeSlider.sort(this.dynamicSort('popularity'));
      this.animeSlider = this.animeSlider.slice(0, 10);
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
}
