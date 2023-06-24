import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!: string;
  userProfile!: User;
  profileForm!: FormGroup;
  editMode = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const usernameFromRoute = this.route.snapshot.paramMap.get('username');
    if(usernameFromRoute) {
      this.username = usernameFromRoute;
      // fetch user profile from the backend
      this.http.get<User>(`http://localhost:8081/beerme/api/auth/profile/${this.username}`).subscribe(user => {
        this.userProfile = user;
        console.log(this.userProfile);
        //initialize the form with the user's current profile information
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
    //access form values using this.profileForm.value
    const updatedProfile = this.profileForm.value;
  
    //call update API endpoint
    this.http.put(`http://localhost:8081/beerme/api/auth/profile/${this.username}/update`, updatedProfile).subscribe(response => {
      
      console.log(response);
      // Update only the 'prp' and 'bio' properties of the userProfile with new data
      this.userProfile.prp = updatedProfile.prp;
      this.userProfile.bio = updatedProfile.bio;
      this.toggleEditMode(); // switch to display mode
    }, error => {
      
      console.error(error);
    });
  }
}
