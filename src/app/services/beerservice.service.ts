import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private BASE_URL = 'http://localhost:8081/beerme/api/auth';

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}/beers`);
  }

  // Add getBeerById, addBeer, updateBeer, etc.
}
