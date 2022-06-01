import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, OnInit } from '@angular/core';
import {
  Anime,
  Rating,
  Sort,
  Status,
  Type,
} from 'src/app/core/model/app.model';
import { Params } from '@angular/router';

import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anime-filter',
  templateUrl: './anime-filter.component.html',
  styleUrls: ['./anime-filter.component.scss'],
})
export class AnimeFilterComponent implements OnInit {
  letter: string = '';
  current_page: number = 1;
  min_score: number = 0;
  max_score: number = 10;
  type: Type;
  status: Status;
  rating: Rating;
  genres: string = '';
  start_date: string;
  end_date: string;
  sort: Sort;
  showType = false;
  showStatus = false;
  showRating = false;
  showSort = false;
  public filter: Anime;
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  keyword: string = '';
  totalPages: number;
  public listGenres = [];
  public genresArr = [];

  constructor(
    private animeService: AnimeService,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = NgbDate.from({ year: 2000, month: 1, day: 1 });

    this.toDate = calendar.getToday();
  }

  ngOnInit(): void {
    this.animeService.getAllGenres().subscribe((p) => {
      this.listGenres = p;
    });
    this.animeService.getAllAnime().subscribe((p: Params) => {
      this.filter = p.data;
      this.totalPages = p.pagination.last_visible_page;
    });
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
  toggle(e) {
    if (e == 'type') {
      this.showType = !this.showType;
    } else if (e == 'status') {
      this.showStatus = !this.showStatus;
    } else if (e == 'rating') {
      this.showRating = !this.showRating;
    } else if (e == 'sort') {
      this.showSort = !this.showSort;
    }
  }
  changeStatus(e, b) {
    if (b == 'type') {
      this.type = e.getAttribute('value');
    } else if (b == 'status') {
      this.status = e.getAttribute('value');
    } else if (b == 'rating') {
      this.rating = e.getAttribute('value');
    } else if (b == 'sort') {
      this.sort = e.getAttribute('value');
    }
  }
  filterAnime() {
    this.start_date = this.formatter.format(this.fromDate);
    this.end_date = this.formatter.format(this.toDate);
    this.animeService
      .getAnimeByFilter(
        this.keyword,
        this.letter,
        this.current_page,
        this.min_score,
        this.max_score,
        this.type,
        this.status,
        this.rating,
        this.genres,
        this.start_date,
        this.end_date,
        this.sort
      )
      .subscribe((p: Params) => {
        this.filter = p.data;
        this.totalPages = p.pagination.last_visible_page;
      });
  }
  changeFilter(e, item) {
    if (this.genresArr.indexOf(e.getAttribute('value')) > 0) {
      this.genresArr.splice(this.genresArr.indexOf(e.getAttribute('value')), 1);
    } else if (this.genresArr.indexOf(e.getAttribute('value')) == 0) {
      this.genresArr.pop();
    } else {
      this.genresArr.push(e.getAttribute('value'));
    }
    this.genres = this.genresArr.join(',');
    item.show = !item.show;
  }
  onPaginationClick(e) {
    this.current_page = e;
    this.animeService
      .getAnimeByFilter(
        this.keyword,
        this.letter,
        this.current_page,
        this.min_score,
        this.max_score,
        this.type,
        this.status,
        this.rating,
        this.genres,
        this.start_date,
        this.end_date,
        this.sort
      )
      .subscribe((p: Params) => {
        this.filter = p.data;
        this.totalPages = p.pagination.last_visible_page;
      });
  }
}
