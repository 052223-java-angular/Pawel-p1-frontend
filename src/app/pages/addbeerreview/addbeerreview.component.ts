import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeerService } from 'src/app/services/beerservice.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ReviewserviceService } from 'src/app/services/reviewservice.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './addbeerreview.component.html',
  styleUrls: ['./addbeerreview.component.css']
})
export class AddBeerReviewComponent {
  reviewForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private beerService: BeerService,
    private authService: AuthServiceService,
    private reviewService: ReviewserviceService
  ) {
    this.reviewForm = this.formBuilder.group({
      username: [this.authService.getUsernameFromLocalStorage(), Validators.required],
      beername: ['', Validators.required],
      rating: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      const { username, beername, rating, comment } = this.reviewForm.value;
  
      this.reviewService.addReview(username, beername, rating, comment)
        .subscribe(() => {
          this.reviewForm.reset();
          alert('Review added successfully!');
        }, error => {
          console.error('There was an error in adding the review!', error);
        });
    } else {
      alert('Form is invalid!');
    }
  }
}  
