import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewserviceService {
  private  BASE_URL = 'http://localhost:8081/beerme/api/auth';

  constructor(private http: HttpClient) { }

  addReview(username: string, beername: string, rating: string, comment: string) {
    const body = {
      username: username,
      beername: beername,
      rating : rating,
      comment: comment,
    }
    return this.http.post('http://localhost:8081/beerme/api/auth/review', body);  
  }
  

}
