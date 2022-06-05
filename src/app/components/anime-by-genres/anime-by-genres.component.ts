import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime-by-genres',
  templateUrl: './anime-by-genres.component.html',
  styleUrls: ['./anime-by-genres.component.scss'],
})
export class AnimeByGenresComponent implements OnInit {
  listAnimeByGenres: Anime[];
  pagination;
  page: number = 1;
  type: string = '';
  listAnimeDisplayBig: Anime[];
  year: number = null;
  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.type = p.genres.toString();
      this.animeService.getAnimeByGenres(this.type).subscribe((res: any) => {
        this.pagination = res.pagination;
        this.listAnimeByGenres = res.data.slice(4, 24);
        this.listAnimeDisplayBig = res.data.slice(0, 4);
      });
    });
  }
  animeByYear(e) {
    this.year = e.data;
    this.listAnimeByGenres = null;
    this.animeService
      .getAnimeByYear(e.data, this.type)
      .subscribe((res: any) => {
        this.pagination = res.pagination;
        this.listAnimeByGenres = res.data.slice(4, 24);
        this.listAnimeDisplayBig = res.data.slice(0, 4);
      });
  }
  logPage() {
    this.listAnimeByGenres = null;
    this.animeService
      .getAnimeByType(this.type, this.page)
      .subscribe((res: any) => {
        this.listAnimeByGenres = res.data.slice(4, 24);
        this.listAnimeDisplayBig = res.data.slice(0, 4);
      });
  }
}
