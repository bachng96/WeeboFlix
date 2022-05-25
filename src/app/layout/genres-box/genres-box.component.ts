import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-genres-box',
  templateUrl: './genres-box.component.html',
  styleUrls: ['./genres-box.component.scss'],
})
export class GenresBoxComponent implements OnInit {
  public genres;
  public partGenres;
  public show = false;
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAllGenres().subscribe((p) => {
      this.genres = p;
      this.partGenres = this.genres.slice(0, 24);
      console.log(this.partGenres);
    });
  }

  showAll() {
    if (this.show == false) {
      this.partGenres = this.genres.slice(0, 24);
      this.show = !this.show;
    } else {
      this.partGenres = this.genres;
      console.log(this.partGenres);
      this.show = !this.show;
    }
  }
}
