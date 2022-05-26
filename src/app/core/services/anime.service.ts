import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private BASE_URL = 'https://api.jikan.moe/v4/';

  constructor(private http: HttpClient) {}

  getAllAnime() {
    return this.http.get(this.BASE_URL + 'anime')
  }

  getAnimeById(id: string) {
    return this.http.get(this.BASE_URL + 'anime/' + id + '/full')
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
}
