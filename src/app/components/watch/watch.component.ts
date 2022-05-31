import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  animeDetail: Anime

  constructor(private router: ActivatedRoute, private animeService: AnimeService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.animeService.getAnimeById(params.id).subscribe(data => {
        console.log(data['data'])
        this.animeDetail = data['data'];
        if(!this.animeDetail.trailer.embed_url){
          console.log("when no trailer is found")
          console.log(this.sanitizer.bypassSecurityTrustResourceUrl(this.animeDetail.trailer.embed_url)) 
        }
      })
    })
  }

}
