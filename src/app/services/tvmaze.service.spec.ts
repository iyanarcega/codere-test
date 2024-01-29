import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockedTVShow } from './tvmaze.mocks';
import { TVShow } from './tvmaze.model';
import { TvmazeOptions } from './tvmaze.options';
import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  let service: TvmazeService;
  let httpMock: HttpTestingController;
  let options: TvmazeOptions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TvmazeService,
        {
          provide: TvmazeOptions,
          useValue: new TvmazeOptions('https://api.tvmaze.com'),
        },
      ],
    });
    service = TestBed.inject(TvmazeService);
    httpMock = TestBed.inject(HttpTestingController);
    options = TestBed.inject(TvmazeOptions);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getShows() should return sorted shows by rating', () => {
    const mockShows: Partial<TVShow>[] = [
      { id: 1, name: 'Show 1', rating: { average: 8.5 } },
      { id: 2, name: 'Show 2', rating: { average: 9.0 } },
    ];
    service.getShows().subscribe((data) => {
      expect(data[0].name).toEqual('Show 2');
      expect(data.length).toBe(2);
    });

    const req = httpMock.expectOne(options.showsUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockShows);
  });

  it('getShow() should return a show by id', () => {
    const showId = mockedTVShow.id.toString();
    service.getShow(showId).subscribe((data) => {
      expect(data).toEqual(mockedTVShow);
    });

    const req = httpMock.expectOne(options.getShowUrl(showId));
    expect(req.request.method).toBe('GET');
    req.flush(mockedTVShow);
  });

  it('searchShows() should return search results', () => {
    const query = 'test';
    const mockSearchResults: { show: Partial<TVShow> }[] = [
      { show: mockedTVShow },
    ];
    service.searchShows(query).subscribe((results) => {
      expect(results.length).toBe(1);
      expect(results[0].show.name).toEqual(mockedTVShow.name);
    });

    const req = httpMock.expectOne(options.getSearchShowsUrl(query));
    expect(req.request.method).toBe('GET');
    req.flush(mockSearchResults);
  });
});
