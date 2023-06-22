
import { Component } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beerservice.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent {
  beers: Beer[] = []; 



  constructor(private beerService: BeerService) {}
  
  
  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

  

}