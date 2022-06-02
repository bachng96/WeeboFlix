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

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}
}
