import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Params } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';
import { Anime } from 'src/app/core/model/app.model';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  @Input() animes: Anime[];

  swiperConfig: any = {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    keyboard: true,
    mousewheel: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      1441: {
        slidesPerView: 8,
        spaceBetween: 50,
      }
    },
  };

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}
}
