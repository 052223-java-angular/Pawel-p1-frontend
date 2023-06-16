import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../models/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {




  constructor(private http: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<Auth>{
    return this.http.post<Auth>('http://localhost:8081/api/auth/register', registerPayload);
  }

}
