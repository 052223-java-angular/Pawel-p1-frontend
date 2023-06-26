import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  addFavorite(username: string, beername: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorite`, { username, beername });
  }
}