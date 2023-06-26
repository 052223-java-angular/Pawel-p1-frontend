import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer';
import { Review } from '../models/review';
import { ReviewDTO } from '../models/reviewDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private BASE_URL = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}/beers`);
  }

  getBeerById(id: string): Observable<Beer> {
    return this.http.get<Beer>(`${this.BASE_URL}/beers/${id}`);
  }

  getUserBeers(username: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}/user/${username}/beers`);
  }

  addReview(username: string, beername: string, rating: string, comment: string): Observable<any> {
    const url = `${this.BASE_URL}/review`;
    const reviewRequest = {
      username: username,
      beername: beername,
      rating: rating,
      comment: comment
    };
    return this.http.post(url, reviewRequest);
  }
  
  addBeer(beer: Beer): Observable<Beer> {
    return this.http.post<Beer>(`${this.BASE_URL}/beers`, beer);
  }

  getUserReviews(username: string): Observable<ReviewDTO[]> {
    return this.http.get<ReviewDTO[]>(`${this.BASE_URL}/${username}/reviews`);
  }
}  
