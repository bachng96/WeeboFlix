import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { AnimeService } from 'src/app/core/services/anime.service';
import { Anime, Root } from './../../core/model/app.model';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animeList: Anime[];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animeService.getAllAnime().subscribe((data: Root) => {
        this.animeList = data.data;
        console.log(this.animeList);
      });
    }, 2000);
  }
}
