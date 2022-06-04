import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';

@Component({
  selector: 'app-mostview-box',
  templateUrl: './mostview-box.component.html',
  styleUrls: ['./mostview-box.component.scss'],
})
export class MostviewBoxComponent implements OnInit {
  topAnime;
  filter = 'score';
  score = true;
  scored_by = false;
  favorites = false;
  flag: string = 'score';
  constructor(
    private animeService: AnimeService,
    public watchListService: WatchListService,
    public toastService: ToastService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.animeService.getTopAnime().subscribe((p: Params) => {
      this.topAnime = p.data;
      this.topAnime.sort(this.dynamicSort(`${this.filter}`));
      this.topAnime = this.topAnime.slice(0, 9);
    });
  }
  changeFilter(e) {
    this.filter = e.getAttribute('value');
    this.topAnime.sort(this.dynamicSort(`${this.filter}`));
    this.topAnime = this.topAnime.slice(0, 10);
    if (e.getAttribute('value') == 'score' && this.flag != 'score') {
      this.flag = 'score';
      this.score = !this.score;
      this.scored_by = false;
      this.favorites = false;
    } else if (
      e.getAttribute('value') == 'scored_by' &&
      this.flag != 'scored_by'
    ) {
      this.flag = 'scored_by';
      this.scored_by = !this.scored_by;
      this.favorites = false;
      this.score = false;
    } else if (
      e.getAttribute('value') == 'favorites' &&
      this.flag != 'favorites'
    ) {
      this.flag = 'favorites';
      this.favorites = !this.favorites;
      this.scored_by = false;
      this.score = false;
    }
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  addWhislit(e, item) {
    e.stopPropagation();
    this.userService.checkLogin(() => {
      this.watchListService.addToWatchList(item);
      this.showDanger(`Add ${item.title} to wishlist success !`);
    });
  }
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }
}
