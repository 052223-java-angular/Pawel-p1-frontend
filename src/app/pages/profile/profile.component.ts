import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username?: string;
  userProfile!: User;
  profileForm!: FormGroup;
  editMode = false;

  private BASE_URL = environment.apiBaseUrl;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.username = this.authService.getUsernameFromLocalStorage();
    if(this.username) {
      this.http.get<User>(`${this.BASE_URL}/profile/${this.username}`).subscribe(user => {
        this.userProfile = user;
        console.log(this.userProfile);
        this.profileForm = this.fb.group({
          prp: [this.userProfile.prp],
          bio: [this.userProfile.bio],
        });
      },
      error => {
        console.error('There was an error!', error);
      });
    }
  }
  
  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(): void {
    const updatedProfile = this.profileForm.value;
    this.http.put(`${this.BASE_URL}/profile/${this.username}/update`, updatedProfile).subscribe(response => {
      console.log(response);
      this.userProfile.prp = updatedProfile.prp;
      this.userProfile.bio = updatedProfile.bio;
      this.toggleEditMode();
    }, error => {
      console.error(error);
    });
  }
}
