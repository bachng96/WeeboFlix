import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { AnimeService } from 'src/app/core/services/anime.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';
import { Anime, Root } from './../../core/model/app.model';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  @Input() animeList: Anime[];
  @Input() bigger: string = 'false';
  @Input() animeHeader: string;
  @Input() dropDown: boolean;
  @Input() buttonAdd: boolean;
  @Output() removeItem = new EventEmitter();
  @Output() changeWLStatus = new EventEmitter();
  status;
  toggleButton;

  constructor(
    private animeService: AnimeService,
    public watchListService: WatchListService,
    private ElByClassName: ElementRef
  ) {}

  ngOnInit(): void {
  }
  remove(item) {
    this.removeItem.emit(item);
  }
  changeStatus(e, item) {
    this.changeWLStatus.emit([e.getAttribute('value'), item]);
  }
  toggle(item) {
    item.show = !item.show;
  }
  over(id) {
    let el = this.ElByClassName.nativeElement.querySelector(`.${id}`);
    console.log(el)
    el.style.display = 'block';
  }
  out() {

  }
}
