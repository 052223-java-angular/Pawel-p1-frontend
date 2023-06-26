import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteService } from 'src/app/services/favoriteservice.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  username: string = '';
  beername: string = '';

  constructor(
    private favoriteService: FavoriteService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = user.username || '';
  }

  addFavorite(): void {
    this.favoriteService.addFavorite(this.username, this.beername).subscribe(response => {
      this.snackBar.open('Favorite added successfully', 'OK', {
        duration: 3000,
      });
    }, error => {
      this.snackBar.open('Error while adding favorite: ' + error, 'OK', {
        duration: 3000,
      });
    });
  }
}
