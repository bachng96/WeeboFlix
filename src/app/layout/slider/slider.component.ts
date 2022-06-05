import { WatchListService } from './../../core/services/watch-list.service';
import { UserService } from './../../core/services/user.service';
import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Params } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';
import { Anime } from 'src/app/core/model/app.model';
import { ToastService } from 'src/app/core/services/toast.service';

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
    spaceBetween: 42,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: { clickable: true },
    keyboard: true,
    mousewheel: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      1441: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    },
  };

  constructor(
    private animeService: AnimeService,
    private userService: UserService,
    private watchListService: WatchListService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {}
  addWhislit(e, item) {
    e.stopPropagation();
    this.userService.checkLogin(() => {
      this.watchListService.addToWatchList(item);
    });
  }
}
