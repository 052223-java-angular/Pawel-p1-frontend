import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beerservice.service';

@Component({
  selector: 'app-beer-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class BeerSearchComponent implements OnInit {
  dataSource = new MatTableDataSource<Beer>();
  displayedColumns = ['id', 'name', 'brewery', 'type'];

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.beerService.getBeers().subscribe((beers: Beer[]) => {
      this.dataSource.data = beers;
    });
  }


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
