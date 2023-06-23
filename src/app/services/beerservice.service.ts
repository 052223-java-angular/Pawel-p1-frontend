import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  getBeerById(id: string): Observable<Beer> {
    return this.http.get<Beer>(`${this.BASE_URL}/beers/${id}`).pipe(
      tap(beer => console.log(beer))  
    );
  }

}
  
