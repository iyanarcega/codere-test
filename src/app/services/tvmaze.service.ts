import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { TVShow, TVShowSearchResult, sortShowsByRating } from './tvmaze.model';
import { TvmazeOptions } from './tvmaze.options';

@Injectable({
  providedIn: 'root',
})
export class TvmazeService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private options: TvmazeOptions) {}

  public getShows(): Observable<TVShow[]> {
    return this.http
      .get<TVShow[]>(this.options.showsUrl)
      .pipe(switchMap((data) => of(sortShowsByRating(data))));
  }

  public getShow(id: string): Observable<TVShow> {
    const url = this.options.getShowUrl(id);
    return this.http.get<TVShow>(url);
  }

  public searchShows(query: string): Observable<TVShowSearchResult[]> {
    const url = this.options.getSearchShowsUrl(query);
    return this.http.get<TVShowSearchResult[]>(url);
  }
}
