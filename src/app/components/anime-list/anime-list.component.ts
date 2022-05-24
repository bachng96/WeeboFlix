import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAllGenres().subscribe(data => {
      console.log(data);
    });
  }

}
