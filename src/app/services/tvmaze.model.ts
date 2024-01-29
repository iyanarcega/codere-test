export interface TVShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel: any;
  dvdCountry: any;
  externals: Externals;
  image: Image | null;
  summary: string;
  updated: number;
  _links: Links;
}

export interface TVShowGenreGroup {
  name: string;
  items: TVShow[];
}

export interface TVShowSearchResult {
  score: number;
  show: TVShow;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Self;
  previousepisode: Previousepisode;
}

interface Self {
  href: string;
}

interface Previousepisode {
  href: string;
}

export function sortShowsByRating(response: TVShow[]): TVShow[] {
  return response.sort((a, b) => b.rating.average - a.rating.average);
}
