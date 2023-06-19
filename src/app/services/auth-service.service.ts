import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../models/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { LoginPayload } from '../models/login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {




  constructor(private http: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<void>{
    return this.http.post<void>('http://localhost:8081/beerme/api/auth/register', registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<Auth>{
    return this.http.post<Auth>('http://localhost:8081/beerme/api/auth/login', loginPayload);
}}
