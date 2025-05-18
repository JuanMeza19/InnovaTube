import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { PexelsService } from "../../../core/services/pexels.service";
import { FavoriteVideosService } from "../../../core/services/favorite-videos.service";

// src/app/pages/all-videos/all-videos.component.ts
@Component({
  standalone: true,
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrl: './all-videos.component.css',
  imports: [CommonModule],
})
export class AllVideosPageComponent implements OnInit {
  videos = signal<any[]>([]);

  constructor(
    private pexelsService: PexelsService,
    public favoritesService: FavoriteVideosService
  ) {}

  ngOnInit(): void {
    this.pexelsService.searchVideos('nature', 12).subscribe(response => {
      this.videos.set(response.videos);
    });
  }
}
