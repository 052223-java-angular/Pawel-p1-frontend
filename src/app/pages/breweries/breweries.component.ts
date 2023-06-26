import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/breweryservice.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit {
  breweries: any;
  displayedColumns: string[] = ['name', 'street', 'city', 'state', 'website_url'];


  constructor(private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.getBreweries();
  }

  getBreweries(): void {
    this.breweryService.getBreweries().subscribe(breweries => this.breweries = breweries);
  }
}
