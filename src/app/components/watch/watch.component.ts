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
  embed_url
  epList = []
  reviewsList = []
  reviewsShowList = []
  isShowAll = false

  constructor(private router: ActivatedRoute, private animeService: AnimeService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params.id
    this.animeService.getAnimeById(id).subscribe(data => {
      this.animeDetail = data['data'];
      this.embed_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.animeDetail.trailer.embed_url)
      console.log(this.animeDetail)
      if(this.animeDetail.episodes == null){
        this.epList.push(1);
      }else {
        for(let i = 0; i < this.animeDetail.episodes; i++) {
          this.epList.push(i + 1)
        }
      }
    })

    this.animeService.getAnimeReviews(id).subscribe(data => {
      this.reviewsList = data['data'];
      this.reviewsShowList = this.reviewsList.slice(0, 3)
      console.log(this.reviewsList)
    })
  }

  showAll() {
    if(this.isShowAll) {
      this.reviewsShowList = this.reviewsList.slice(0, 3)
      this.isShowAll = false
    }else {
      this.isShowAll = true
      this.reviewsShowList = this.reviewsList
    }
  }
  
}
