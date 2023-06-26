import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from 'src/app/services/beerservice.service';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beerpage',
  templateUrl: './beerpage.component.html',
  styleUrls: ['./beerpage.component.css']
})
export class BeerpageComponent implements OnInit {
  beer: Beer | undefined;
  displayedColumns: string[] = ['name', 'style', 'abv', 'review'];
  dataSource: Beer[] = [];

  constructor(private route: ActivatedRoute, private beerService: BeerService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getBeer(id);
      
    }
  }

  getBeer(id: string): void {
    this.beerService.getBeerById(id).subscribe((beer: Beer) => {
      this.beer = beer;
      console.log(this.beer.reviews);
    }, (error) => {
      console.log(error);
    });
  }}    
