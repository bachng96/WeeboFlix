import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';
import { UserService } from 'src/app/core/services/user.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {
  animeDetail: Anime;

  constructor(
    private router: ActivatedRoute,
    private animeService: AnimeService,
    private userService: UserService,
    private watchlist: WatchListService
  ) {}

  ngOnInit(): void {
    let id = this.router.params.subscribe((params) => {
      this.animeService.getAnimeById(params.id).subscribe((data) => {
        this.animeDetail = data['data'];
      });
    });
  }
  addWhislit(e, item) {
    e.stopPropagation();
    this.userService.checkLogin(() => {
      this.watchlist.addToWatchList(item);
    });
  }
}
