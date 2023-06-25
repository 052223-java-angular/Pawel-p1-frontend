import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private BASE_URL = 'http://localhost:8081/beerme/auth';

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}/beers`);
  }

  getBeerById(id: string): Observable<Beer> {
    return this.http.get<Beer>(`${this.BASE_URL}/beers/${id}`).pipe(
      tap(beer => console.log(beer))  
    );
  }

  getUserBeers(username: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}/${username}`).pipe(
      tap(beer => console.log(beer)));
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
  

}
  
