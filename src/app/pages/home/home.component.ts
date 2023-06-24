import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { url: 'https://halfacrebeer.com/wp-content/uploads/2021/08/MicrosoftTeams-image-177-1-1024x819.jpg', description: 'Half Acre Bodem' },
    
  ];
}
