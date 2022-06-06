import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { timer } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { AnimeService } from 'src/app/core/services/anime.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';
import { Anime, Root } from './../../core/model/app.model';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  @Input() animeList: Anime[];
  @Input() bigger: boolean = false;
  @Input() typeViewMore: string;
  @Input() animeHeader: string;
  @Input() viewMoreFlag: boolean = false;
  @Input() dropDown: boolean;
  @Input() buttonAdd: boolean;
  @Output() removeItem = new EventEmitter();
  @Output() changeWLStatus = new EventEmitter();
  status;
  toggleButton;

  constructor(
    private animeService: AnimeService,
    public watchListService: WatchListService,
    private ElByClassName: ElementRef,
    public toastService: ToastService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  remove(item) {
    this.removeItem.emit(item);
  }
  changeStatus(e, item) {
    this.changeWLStatus.emit([e.getAttribute('value'), item]);
  }
  toggle(e, item) {
    e.stopPropagation();
    item.show = !item.show;
  }
  over(t, item) {
    t.close();
    t.open({ item });
  }
  out(t) {
    t.close();
  }
  addWhislit(e, item) {
    e.stopPropagation();
    this.userService.checkLogin(() => {
      this.watchListService.addToWatchList(item);
      console.log(item);
    });
  }
}
