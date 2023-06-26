import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from '../models/register-payload';
import { Observable, of, tap } from 'rxjs';
import { Auth } from '../models/auth';
import { LoginPayload } from '../models/login-payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private BASE_URL = environment.apiBaseUrl;
  user?: Auth;

  constructor(private http: HttpClient, private router: Router) { }

  register(registerPayload: RegisterPayload): Observable<void>{
    return this.http.post<void>(`${this.BASE_URL}/register`, registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<Auth>{
    return this.http.post<Auth>(`${this.BASE_URL}/login`, loginPayload)
      .pipe(
        tap(user => {
          console.log('Logged in user:', user);
          this.user = user;
          
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate([`/profile/${user.username}`]);
        })
      );
  }

  getUserFromLocalStorage(): Auth | null {
    const user = localStorage.getItem('user');
    console.log('User from localStorage:', user);
    return user ? JSON.parse(user) : null;
  }

  getUsernameFromLocalStorage(): string {
    const user = this.getUserFromLocalStorage();
    console.log('Username from localStorage:', user ? user.username : '');
    return user ? user.username : '';
  }
}
