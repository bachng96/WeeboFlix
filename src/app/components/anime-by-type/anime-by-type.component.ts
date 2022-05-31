import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime-by-type',
  templateUrl: './anime-by-type.component.html',
  styleUrls: ['./anime-by-type.component.scss'],
})
export class AnimeByTypeComponent implements OnInit {
  listAnimeByType: Anime[];
  pagination;
  page = 1;
  type: string;
  listAnimeDisplayBig: Anime[];
  year: number = null;
  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.animeService.getAnimeByType(this.type).subscribe((res: any) => {
      this.pagination = res.pagination;

      this.listAnimeByType = res.data;
      this.listAnimeDisplayBig = res.data.slice(0, 4);
    });
  }
  animeByYear(e) {
    this.year = e.data;
    this.listAnimeByType = null;
    this.animeService
      .getAnimeByYear(e.data, this.type)
      .subscribe((res: any) => {
        this.pagination = res.pagination;
        this.listAnimeByType = res.data;
      });
  }
  logPage() {
    this.listAnimeByType = null;
    this.animeService
      .getAnimeByType(this.type, this.page)
      .subscribe((res: any) => {
        this.listAnimeByType = res.data;
        this.listAnimeDisplayBig = res.data.slice(0, 4);
      });
  }
}