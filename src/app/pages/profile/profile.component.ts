import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!: string;
  userProfile!: User;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const usernameFromRoute = this.route.snapshot.paramMap.get('username');
    if(usernameFromRoute) {
      this.username = usernameFromRoute;
    // fetch user profile from the backend
    this.http.get<User>(`http://localhost:8081/beerme/api/auth/profile/${this.username}`).subscribe(user => {
      this.userProfile = user;
      console.log(this.userProfile);
    
    },
    error => {
      console.error('There was an error!', error);
    });
    }

  //   
  }
}
