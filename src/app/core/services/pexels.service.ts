// src/app/services/pexels.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PexelsService {
  private API_KEY = '4vrTL65pw3tXYOtQANEF94YaOCqGlbc6wuCM3giHJiYJv6FyAJxTGJ8Z';
  private API_URL = 'https://api.pexels.com/videos/search';

  constructor(private http: HttpClient) {}

  searchVideos(query: string = 'nature', perPage: number = 10): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.API_KEY,
    });

    const url = `${this.API_URL}?query=${query}&per_page=${perPage}`;
    return this.http.get(url, { headers });
  }
}
