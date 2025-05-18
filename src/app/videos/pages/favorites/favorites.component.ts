import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteVideosService } from '../../../core/services/favorite-videos.service';

@Component({
  standalone: true,
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  imports: [CommonModule],
})
export class FavoritesPageComponent {
  constructor(public favoritesService: FavoriteVideosService) {}
}
