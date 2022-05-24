import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-genres-box',
  templateUrl: './genres-box.component.html',
  styleUrls: ['./genres-box.component.scss'],
})
export class GenresBoxComponent implements OnInit {
  public genres;
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAllGenres().subscribe((p) => {
      this.genres = p;
    });
  }
}
