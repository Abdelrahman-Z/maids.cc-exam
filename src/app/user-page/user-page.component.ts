import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Import ActivatedRoute
import { UserPageService } from './user-page.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  userId: number | any; // Declare a variable to store the user ID
  user: any; //
  loading: boolean = true;

  constructor(
    private userPageService: UserPageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Extract the user ID from the route parameters
      this.fetchUserData();
    });
  }

  fetchUserData(): void {
    this.userPageService.getUserById(this.userId).subscribe(
      (userData) => {
        console.log('User data:', userData);
        this.user = userData.data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
    this.loading = false;
  }
  goBack(): void {
    // Navigate back to the previous route
    this.location.back();
  }
}
