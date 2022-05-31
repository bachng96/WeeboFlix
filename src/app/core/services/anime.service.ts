import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';
import { Anime } from '../model/app.model';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private BASE_URL = 'https://api.jikan.moe/v4/';
  private BASE_URL_V3 = 'https://api.jikan.moe/v3/';
  constructor(private http: HttpClient) {}

  getAllAnime() {
    return this.http.get(this.BASE_URL + 'anime');
  }
  getAnimeByName(query, limit: number = 5) {
    return this.http.get(this.BASE_URL + 'anime?q=', {
      params: {
        q: query,
        limit: limit.toString(),
      },
    });
  }

  getAnimeById(id: string) {
    return this.http.get(this.BASE_URL + 'anime/' + id + '/full');
  }
  getTopAnimeByType() {
    return this.http.get(this.BASE_URL_V3 + 'top/anime/1/upcoming');
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

  getAnimeByFilter(letter: string, current_page: number) {
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

  getRandomAnime() {
    return this.http.get(this.BASE_URL + 'random/anime');
  }
}
