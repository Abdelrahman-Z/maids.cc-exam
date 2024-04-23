import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Set default route to /users
  {path: 'users/:id', component:UserPageComponent },
  { path: 'users', component: HomePageComponent }, // Add a route for /users
];
