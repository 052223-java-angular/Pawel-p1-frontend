// UserBeerlistComponent
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beerservice.service';

@Component({
  selector: 'app-user-beerlist',
  templateUrl: './userbeerlist.component.html',
  styleUrls: ['./userbeerlist.component.css']
})
export class UserBeerlistComponent implements OnInit {
  beers: Beer[] = [];
  username: string = '';

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getBeers();
    });
  }

  getBeers(): void {
    this.beerService.getUserBeers(this.username).subscribe(beers => this.beers = beers);
  }
}
