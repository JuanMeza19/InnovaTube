import { Routes } from '@angular/router';
import { AllVideosPageComponent } from './pages/all-videos/all-videos.component';
import { FavoritesPageComponent } from './pages/favorites/favorites.component';
import { authGuard } from '../core/guards/auth.guard';

export const VIDEOS_ROUTES: Routes = [
  { path: '', component: AllVideosPageComponent, canActivate: [authGuard] },
  { path: 'favorites', component: FavoritesPageComponent, canActivate: [authGuard] }
];