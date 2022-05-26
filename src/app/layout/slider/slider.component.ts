import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Params } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  animes;
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animeService.getAllAnime().subscribe((p: Params) => {
        this.animes = p.data;
        this.animes.sort(this.dynamicSort('popularity'));
        this.animes = this.animes.slice(0, 10);
      });
    }, 2000);
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
