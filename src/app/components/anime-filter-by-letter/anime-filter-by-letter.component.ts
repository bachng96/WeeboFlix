import { AnimeService } from './../../core/services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/model/app.model';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-filter-by-letter',
  templateUrl: './anime-filter-by-letter.component.html',
  styleUrls: ['./anime-filter-by-letter.component.scss'],
})
export class AnimeFilterByLetterComponent implements OnInit {
  alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  public filter: Anime;
  public filterKey: string = '';
  public sumPage: number;
  public listPage = [];
  public current_page: number = 1;
  constructor(
    private animeSerivce: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((q) => {
      this.filterKey = q.key;
      this.animeSerivce
        .getAnimeByFilterLetter(this.filterKey, this.current_page)
        .subscribe((p: Params) => {
          this.filter = p.data;
          this.sumPage = p.pagination.last_visible_page;
          for (let i = 1; i <= this.sumPage; i++) {
            this.listPage.push(i);
          }
        });
    });
  }
  changeFilter(e) {
    this.filterKey = e;
    this.animeSerivce
      .getAnimeByFilterLetter(this.filterKey, this.current_page)
      .subscribe((p: Params) => {
        this.filter = p.data;
      });
  }
  changePage(e) {
    this.current_page = e;
    this.animeSerivce
      .getAnimeByFilterLetter(this.filterKey, this.current_page)
      .subscribe((p: Params) => {
        this.filter = p.data;
      });
  }
  onPaginationClick(e) {
    this.current_page = e;
    this.animeSerivce
      .getAnimeByFilterLetter(this.filterKey, this.current_page)
      .subscribe((p: Params) => {
        this.filter = p.data;
      });
  }
}
