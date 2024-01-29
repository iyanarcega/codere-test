import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVShow } from '../services/tvmaze.model';
import { TvmazeService } from '../services/tvmaze.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item?: TVShow;

  constructor(
    private route: ActivatedRoute,
    private tvmazeService: TvmazeService
  ) {}

  ngOnInit() {
    const showId = this.route.snapshot.paramMap.get('id');
    if (!showId) return;

    this.tvmazeService.getShow(showId).subscribe((data) => {
      this.item = data;
    });
  }
}
