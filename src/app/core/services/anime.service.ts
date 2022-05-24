import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  baseURL = 'https://api.jikan.moe/v4/';
  constructor(private http: HttpClient) {}

  getAllGenres() {
    return this.http.get(`${this.baseURL}genres/anime`);
  }
}
