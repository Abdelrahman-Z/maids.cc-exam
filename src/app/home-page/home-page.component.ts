import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule, RouterModule , MatProgressSpinner],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  users: any;
  pages: number[] = [];
  loading: boolean = true;
  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getData(1).subscribe(
      (data) => {
        // Handle the data received from the API
        this.users = data;
        this.pages = Array.from({ length: data.total_pages }, (_, i) => i + 1);
        console.log('Received data:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    this.loading = false;
  }
  onPageButtonClick(page: number): void {
    this.homeService.getData(page).subscribe(
      (data) => {
        this.users = data;
        console.log('Received data for page', page, ':', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
