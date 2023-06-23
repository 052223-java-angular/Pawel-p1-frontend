import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beerservice.service';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {
  beerId!: number;
  beer: any; // replace with your Beer type if you have one
  
  constructor(private route: ActivatedRoute, private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerId = Number(this.route.snapshot.paramMap.get('id')); // gets id from the url
    this.fetchBeerDetails(this.beerId);
  }

  fetchBeerDetails(id: number) {
    this.beerService.getBeer(id).subscribe((beer:any) => {
      this.beer = beer;
    }, (error:any) => {
      console.error('Error fetching beer details', error);
    });
  }
}
