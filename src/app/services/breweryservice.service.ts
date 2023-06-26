import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breweries } from '../models/breweries';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private apiUrl = 'https://api.openbrewerydb.org/v1/breweries?per_page=325';

  constructor(private http: HttpClient) { }

  getBreweries(): Observable<Breweries[]> {
    return this.http.get<Breweries[]>(this.apiUrl);
}
}
