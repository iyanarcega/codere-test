import { Component } from '@angular/core';
import { TVShowSearchResult } from '../services/tvmaze.model';
import { TvmazeService } from '../services/tvmaze.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchQuery = '';
  searchResults: TVShowSearchResult[] = [];

  constructor(private tvmazeService: TvmazeService) {}

  handleInput(event: any): void {
    const query = event.target.value.toLowerCase();
    this.tvmazeService.searchShows(query).subscribe((data) => {
      this.searchResults = data;
    });
  }
}
