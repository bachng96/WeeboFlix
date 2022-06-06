import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-genres-box',
  templateUrl: './genres-box.component.html',
  styleUrls: ['./genres-box.component.scss'],
})
export class GenresBoxComponent implements OnInit {
  public genres: Genres[];
  public partGenres: Genres[];
  public show = false;
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAllGenres().subscribe((p) => {
      this.genres = p;
      this.partGenres = this.genres.slice(0, 24);
    });
  }

  showAll() {
    if (this.show == true) {
      this.partGenres = this.genres.slice(0, 24);
      this.show = !this.show;
    } else {
      this.partGenres = this.genres;
      this.show = !this.show;
    }
  }
}
