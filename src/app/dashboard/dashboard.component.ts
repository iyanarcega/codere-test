import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { distinctUntilChanged } from 'rxjs/operators';
import { register } from 'swiper/element/bundle';
import { TVShow, TVShowGenreGroup } from '../services/tvmaze.model';

register();

@Component({
  selector: 'app-dashboard',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class DashboardComponent implements OnInit {
  @Input()
  tvShowsByGenre: TVShowGenreGroup[] = [];

  slidesPerView = 2;
  readonly breakpoints = {
    XLarge: '(min-width: 1440px)',
    Large: '(min-width: 1024px)',
    Medium: '(min-width: 768px)',
    Small: '(min-width: 550px)',
    XSmall: '(min-width: 375px)',
  };
  readonly breakpoint$ = this.breakpointObserver
    .observe(Object.values(this.breakpoints))
    .pipe(distinctUntilChanged());

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(this.breakpoints.XLarge)) {
      this.slidesPerView = 6;
    } else if (this.breakpointObserver.isMatched(this.breakpoints.Large)) {
      this.slidesPerView = 5;
    } else if (this.breakpointObserver.isMatched(this.breakpoints.Medium)) {
      this.slidesPerView = 4;
    } else if (this.breakpointObserver.isMatched(this.breakpoints.Small)) {
      this.slidesPerView = 3;
    } else if (this.breakpointObserver.isMatched(this.breakpoints.XSmall)) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1;
    }
  }

  trackByFn: (id: number, name: string) => string = (_, name) => name;
  trackByShowFn: (id: number, show: TVShow) => string = (_, show) => show.name;
}
