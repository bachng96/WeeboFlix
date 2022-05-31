import { AnimeService } from 'src/app/core/services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/model/app.model';
import { Params } from '@angular/router';

import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

enum Type {
  'tv',
  'movie',
  'ova',
  'special',
  'ona',
  'music',
}
enum Status {
  'airing',
  'complete',
  'upcoming',
}
enum Rating {
  'g',
  'pg',
  'pg13',
  'r17',
  'r',
  'rx',
}
enum Sort {
  'desc',
  'asc',
}

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
  start_date: string = '1700';
  end_date: string = '2300';
  sort: Sort;
  show = false;
  public filter: Anime;
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(
    private animeService: AnimeService,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = calendar.getToday();

    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {}
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
  toggle() {
    this.show = !this.show;
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
    this.animeService
      .getAnimeByFilter(
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
      });
    console.log(this.formatter.format(this.fromDate));

    console.log(this.formatter.format(this.toDate));
  }
}
