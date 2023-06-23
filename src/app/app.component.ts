import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav!: MatSidenav;

  ngAfterViewInit(): void {
    console.log(this.sidenav);  
  }

  toggle(): void {
    console.log('Toggling sidenav'); 
    this.sidenav.toggle();
  }
}