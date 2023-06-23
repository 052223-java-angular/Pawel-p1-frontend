import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { BeerlistComponent } from './pages/beerlist/beerlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BeerpageComponent } from './pages/beerpage/beerpage.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'beers', component: BeerlistComponent},
  { path: 'beer/:id', component: BeerpageComponent },
  {path: 'profile/:username', component: ProfileComponent},
  // Wildcard route for a 404 page-should be last
  {path: '**', component: NotFoundComponent}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
