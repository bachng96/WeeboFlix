import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

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
@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private BASE_URL = 'https://api.jikan.moe/v4/';

  constructor(private http: HttpClient) {}

  getAllAnime() {
    return this.http.get(this.BASE_URL + 'anime');
  }

  getAnimeById(id: string) {
    return this.http.get(this.BASE_URL + 'anime/' + id + '/full');
  }

  getAllGenres() {
    return this.http.get(this.BASE_URL + 'genres/anime').pipe(
      map((anime) => {
        let keys = ['mal_id', 'name'];
        let newSet = anime['data'].filter(
          (
            (s) => (o) =>
              ((k) => !s.has(k) && s.add(k))(keys.map((k) => o[k]).join('|'))
          )(new Set())
        );
        return newSet.sort((a, b) => a.name.localeCompare(b.name));
      })
    );
  }
  getTopAnime() {
    return this.http.get(this.BASE_URL + 'top/anime');
  }
  getAnimeByFilterLetter(letter: string, current_page: number) {
    return this.http.get(
      this.BASE_URL +
        'anime?' +
        'letter=' +
        letter +
        '&page=' +
        current_page +
        '&limit=24'
    );
  }

  getAnimeByFilter(
    keyword: string,
    letter: string,
    current_page: number,
    min_score: number,
    max_score: number,
    type: Type,
    status: Status,
    rating: Rating,
    genres: string,
    start_date: string,
    end_date: string,
    sort: Sort
  ) {
    return this.http.get(
      this.BASE_URL +
        'anime?' +
        'q=' +
        keyword +
        '&letter=' +
        letter +
        '&page=' +
        current_page +
        '&limit=24' +
        '&min_score=' +
        min_score +
        '&max_score=' +
        max_score +
        '&type=' +
        type +
        '&status=' +
        status +
        '&rating=' +
        rating +
        '&genres=' +
        genres +
        '&start_date=' +
        start_date +
        '&end_date=' +
        end_date +
        '&sort=' +
        sort
    );
  }
}
