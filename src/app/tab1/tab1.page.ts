import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TVShow, TVShowGenreGroup } from '../services/tvmaze.model';
import { TvmazeService } from '../services/tvmaze.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, DashboardComponent, CommonModule],
})
export class Tab1Page implements OnInit, OnDestroy {
  private subscription!: Subscription;
  groupedShows: TVShowGenreGroup[] = [];

  constructor(private tvmazeService: TvmazeService) {}

  ngOnInit(): void {
    this.subscription = this.tvmazeService.getShows().subscribe((data) => {
      // Group TV Shows by genre
      const genreMap: Map<string, TVShow[]> = new Map();
      data.forEach((item) => {
        item.genres.forEach((genre) => {
          if (!genreMap.has(genre)) genreMap.set(genre, []);
          genreMap.get(genre)?.push(item);
        });
      });

      const genresArray = Array.from(genreMap.entries());
      this.groupedShows = genresArray.map(([name, items]) => ({ name, items }));
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
