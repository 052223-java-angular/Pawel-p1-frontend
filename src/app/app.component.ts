import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav!: MatSidenav;

  username: string;

  constructor(public authService: AuthServiceService, private router: Router) { 
    this.username = this.authService.getUsernameFromLocalStorage();
  }

  ngAfterViewInit(): void {
    console.log(this.sidenav);  
  }

  toggle(): void {
    console.log('Toggling sidenav'); 
    this.sidenav.toggle();
  }

  navigateToProfile(): void {
    const username = this.authService.getUsernameFromLocalStorage();
    this.router.navigate([`/profile/${username}`]);
  }
  navigateToMyBeers(): void {
    const username = this.authService.getUsernameFromLocalStorage();
    this.router.navigate([`/user-beers/${username}`]);
  }
}
