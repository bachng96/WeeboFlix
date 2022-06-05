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
  public totalAnime: number;
  public listPage = [];
  public current_page: number = 1;
  public home: string = '';
  public active: string = 'all';

  constructor(
    private animeSerivce: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((q) => {
      if (q.key) {
        this.active = q.key;
        this.filterKey = q.key;
        console.log(q.key);

        this.animeSerivce
          .getAnimeByFilterLetter(this.filterKey, this.current_page)
          .subscribe((p: Params) => {
            this.filter = p.data;
            this.totalAnime = p.pagination.items.total;
            this.sumPage = p.pagination.last_visible_page;
            for (let i = 1; i <= this.sumPage; i++) {
              this.listPage.push(i);
            }
          });
      } else {
        this.animeSerivce.getAllAnime().subscribe((p: Params) => {
          this.active = 'all';
          this.filter = p.data;
          this.totalAnime = p.pagination.items.total;
          this.sumPage = p.pagination.last_visible_page;
          for (let i = 1; i <= this.sumPage; i++) {
            this.listPage.push(i);
          }
        });
      }
    });
  }
  changePage(e) {
    this.current_page = e;
    this.animeSerivce
      .getAnimeByFilterLetter(this.filterKey, this.current_page)
      .subscribe((p: Params) => {
        this.filter = p.data;
      });
    console.log(e);
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
