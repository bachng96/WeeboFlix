import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {
  animeDetail: Anime

  constructor(private router: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params.id
    console.log(id)
    this.animeService.getAnimeById(id).subscribe(data => {
      this.animeDetail = data['data']
      console.log(this.animeDetail)
    })
  }

}
