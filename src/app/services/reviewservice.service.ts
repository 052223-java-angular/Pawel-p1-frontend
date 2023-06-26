import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewserviceService {
  private  BASE_URL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  addReview(username: string, beername: string, rating: string, comment: string) {
    const body = {
      username: username,
      beername: beername,
      rating : rating,
      comment: comment,
    }
    return this.http.post(`${this.BASE_URL}/review`, body);  
  }
  

}
