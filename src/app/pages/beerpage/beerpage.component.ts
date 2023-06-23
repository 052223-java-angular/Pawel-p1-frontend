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

  constructor(private route: ActivatedRoute, private beerService: BeerService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getBeer(id);
    }
  }

  getBeer(id: string): void {
    this.beerService.getBeerById(id).subscribe(beer => this.beer = beer);
  }
}
