import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteVideosService {
  private _favorites = signal<any[]>([]);

  get favorites() {
    return this._favorites.asReadonly();
  }

  addFavorite(video: any) {
    const current = this._favorites();
    if (!current.find((v) => v.id === video.id)) {
      this._favorites.set([...current, video]);
    }
  }

  removeFavorite(videoId: number) {
    this._favorites.set(this._favorites().filter((v) => v.id !== videoId));
  }

  isFavorite(videoId: number) {
    return this._favorites().some((v) => v.id === videoId);
  }

  toggleFavorite(video: any) {
    this.isFavorite(video.id)
      ? this.removeFavorite(video.id)
      : this.addFavorite(video);
  }
}
