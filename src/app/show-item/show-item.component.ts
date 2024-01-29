import { Component, Input } from '@angular/core';
import { TVShow } from '../services/tvmaze.model';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() item: TVShow | null = null;

  constructor() {}
}
