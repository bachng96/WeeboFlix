import { Component, OnInit } from '@angular/core';
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

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAnimeList();
  }

  getAnimeList() {
    setTimeout(() => {
      this.animeService.getAllAnime().subscribe((data: Root) => {
        this.animeList = data.data.slice(0, 12);
        this.animeListNew = data.data.slice(12, 24);
      });
    }, 1000);
  }
}
