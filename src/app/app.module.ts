
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // required animations module
import { ToastrModule } from 'ngx-toastr';
import { BeerlistComponent } from './pages/beerlist/beerlist.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BeerpageComponent } from './pages/beerpage/beerpage.component';
import { BeerSearchComponent } from './pages/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { UserBeerlistComponent } from './pages/userbeerlist/userbeerlist.component';
import { AddBeerReviewComponent } from './pages/addbeerreview/addbeerreview.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BreweriesComponent } from './pages/breweries/breweries.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    BeerlistComponent,
    ProfileComponent,
    BeerpageComponent,
    BeerSearchComponent,
    UserBeerlistComponent,
    AddBeerReviewComponent,
    FavoriteComponent,
    BreweriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatTableModule, // import table module
    MatFormFieldModule, // import form field module
    MatInputModule, // import input module
    MatSidenavModule, 
    FormsModule,// import sidenav module // required animations module
    
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
