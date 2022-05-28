import { Component, Input, OnInit } from '@angular/core';
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
  @Input() animeList: Anime[];
  @Input() animeHeader: string;
  @Input() dropDown: boolean;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}
}
