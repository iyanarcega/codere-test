export class TvmazeOptions {
  constructor(private apiUrl: string) {}

  get showsUrl() {
    return `${this.apiUrl}/shows`;
  }

  getShowUrl(showId: string) {
    return `${this.apiUrl}/shows/${showId}`;
  }

  getSearchShowsUrl(query: string) {
    return `${this.apiUrl}/search/shows?q=${query}`;
  }
}
