//userbeerlist.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beerservice.service';
import { Review } from 'src/app/models/review';
import { ReviewDTO } from 'src/app/models/reviewDTO';


@Component({
  selector: 'app-user-beerlist',
  templateUrl: './userbeerlist.component.html',
  styleUrls: ['./userbeerlist.component.css']
})
export class UserBeerlistComponent implements OnInit {
  beers: Beer[] = [];
  reviews : ReviewDTO[] = [];
  username: string = '';

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getBeers();
      this.getReviews();
    });
  }

  getBeers(): void {
    this.beerService.getUserBeers(this.username).subscribe(beers => this.beers = beers);
    
  }

  getReviews(): void {
    this.beerService.getUserReviews(this.username).subscribe(reviews => this.reviews = reviews); 
  }
  }

